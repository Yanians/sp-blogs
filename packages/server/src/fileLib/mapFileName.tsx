import fs from 'fs';
import path from 'path';
// server/searchComponents.ts

export interface ComponentEntry {
  name: string;
  path: string;
  route: string;
}

const IGNORED_FILES = ['package.json', 'tsconfig.json', 'webpack.config.js'];
const COMPONENT_EXTENSIONS = ['.tsx', '.jsx'];

function walkDir(dir: string, base = ''): ComponentEntry[] {
  const entries: ComponentEntry[] = [];
  const dirEntries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of dirEntries) {
    const absPath = path.join(dir, entry.name);
    const relPath = path.join(base, entry.name);

    if (IGNORED_FILES.includes(entry.name)) continue;

    if (entry.isDirectory()) {
      entries.push(...walkDir(absPath, relPath));
    } else if (
      COMPONENT_EXTENSIONS.includes(path.extname(entry.name)) &&
      !entry.name.startsWith('index')
    ) {
      const componentName = path.basename(entry.name, path.extname(entry.name));
      const route = `/${relPath.replace(path.extname(entry.name), '').replace(/\\/g, '/')}`;
      entries.push({ name: componentName, path: `./src/${relPath}`, route });
    }
  }
  return entries;
}

export function getAllComponents(): ComponentEntry[] {
  const srcDir = path.join(__dirname, '../client/src');
  return walkDir(srcDir);
}


// app.get("/api/components", (req, res) => {
//     const components = scanComponents(COMPONENTS_DIR);
//     res.json(components);
//   });

//   import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import { TextField, Chip, Box } from "@mui/material";

// interface SearchPortalProps {
//   components: string[];
//   onSelect: (component: string) => void;
// }

//React frontend

//searchPortal.tsx


// const SearchPortal: React.FC<SearchPortalProps> = ({ components, onSelect }) => {
//   const [query, setQuery] = useState("");
//   const filtered = components.filter(name =>
//     name.toLowerCase().includes(query.toLowerCase())
//   );

//   return ReactDOM.createPortal(
//     <Box sx={{ position: "fixed", top: 20, left: "30%", zIndex: 9999, bgcolor: "white", p: 2, boxShadow: 3 }}>
//       <TextField
//         fullWidth
//         label="Search Components"
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//       />
//       <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
//         {filtered.map(name => (
//           <Chip key={name} label={name} onClick={() => onSelect(name)} />
//         ))}
//       </Box>
//     </Box>,
//     document.body
//   );
// };

// export default SearchPortal;
