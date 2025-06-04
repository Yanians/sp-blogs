import { marked, Lexer } from 'marked';

let refLinks = {};


function getHeaders(markdown) {
    let header = markdown.match(headerRegExp);
  
    if (!header) {
      return {
        components: [],
      };
    }
  
    header = header[1];
  
    try {
      let regexMatches;
      const headers = {};
  
      // eslint-disable-next-line no-cond-assign
      while ((regexMatches = headerKeyValueRegExp.exec(header)) !== null) {
        const key = regexMatches[1];
        let value = regexMatches[2].replace(/(.*)/, '$1');
        if (value[0] === '[') {
          // Need double quotes to JSON parse.
          value = value.replace(/'/g, '"');
          // Remove the comma after the last value e.g. ["foo", "bar",] -> ["foo", "bar"].
          value = value.replace(/,\s+\]$/g, ']');
          headers[key] = JSON.parse(value);
        } else {
          // Remove trailing single quote yml escaping.
          headers[key] = value.replace(/^'|'$/g, '');
        }
      }
  
      if (headers.components) {
        headers.components = headers.components
          .split(',')
          .map((x) => x.trim())
          .sort();
      } else {
        headers.components = [];
      }
  
      return headers;
    } catch (err) {
      throw new Error(`${err.message} in getHeader(markdown) with markdown: \n\n${header}`);
    }
  }

// Override function
function processAllTokens(tokens) {
  refLinks = tokens.links;
  return tokens;
}

function provideLexer(src, options) {
    return (src, options) => {
      const lexer = new Lexer(options);
      lexer.tokens.links = refLinks;
      return this.block ? lexer.lex(src) : lexer.inlineTokens(src);
    };
  }

  marked.use({ hooks: { processAllTokens, provideLexer } });

  
// Parse reflinks separately from markdown that uses them
marked.parse(`
    [test]: http://example.com
    `);
    
console.log(marked.parse(`
[test link][test]
`));

// output <p><a href="http://example.com">test link</a></p>



function getContents(markdown){

    const renderer = {
        heading({ tokens, depth }) {
          const text = this.parser.parseInline(tokens);
          const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      
          return `
                  <h${depth}>
                    <a name="${escapedText}" class="anchor" href="#${escapedText}">
                      <span class="header-link"></span>
                    </a>
                    ${text}
                  </h${depth}>`;
        }
    }

    const walkTokens = (token) => {
        if (token.type === 'heading') {
          token.depth += 1;
        }
      };
   
    const tokenizer = {
        codespan(src) {
          const match = src.match(/^\$+([^\$\n]+?)\$+/);
          if (match) {
            return {
              type: 'codespan',
              raw: match[0],
              text: match[1].trim()
            };
          }
      
          // return false to use original codespan tokenizer
          return false;
        }
      };

      const descriptionList = {
        name: 'descriptionList',
        level: 'block',                                     // Is this a block-level or inline-level tokenizer?
        start(src) { return src.match(/:[^:\n]/)?.index; }, // Hint to Marked.js to stop and check for a match
        tokenizer(src, tokens) {
          const rule = /^(?::[^:\n]+:[^:\n]*(?:\n|$))+/;    // Regex for the complete token, anchor to string start
          const match = rule.exec(src);
          if (match) {
            const token = {                                 // Token to generate
              type: 'descriptionList',                      // Should match "name" above
              raw: match[0],                                // Text to consume from the source
              text: match[0].trim(),                        // Additional custom properties
              tokens: []                                    // Array where child inline tokens will be generated
            };
            this.lexer.inline(token.text, token.tokens);    // Queue this data to be processed for inline tokens
            return token;
          }
        },
        renderer(token) {
          return `<dl>${this.parser.parseInline(token.tokens)}\n</dl>`; // parseInline to turn child tokens into HTML
        }
      };

      
const description = {
    name: 'description',
    level: 'inline',                                 // Is this a block-level or inline-level tokenizer?
    start(src) { return src.match(/:/)?.index},    // Hint to Marked.js to stop and check for a match
    tokenizer(src, tokens) {
      const rule = /^:([^:\n]+):([^:\n]*)(?:\n|$)/;  // Regex for the complete token, anchor to string start
      const match = rule.exec(src);
      if (match) {
        return {                                         // Token to generate
          type: 'description',                           // Should match "name" above
          raw: match[0],                                 // Text to consume from the source
          dt: this.lexer.inlineTokens(match[1].trim()),  // Additional custom properties, including
          dd: this.lexer.inlineTokens(match[2].trim())   //   any further-nested inline tokens
        };
      }
    },
    renderer(token) {
      return `\n<dt>${this.parser.parseInline(token.dt)}</dt><dd>${this.parser.parseInline(token.dd)}</dd>`;
    },
    childTokens: ['dt', 'dd'],                 // Any child tokens to be visited by walkTokens
  };
  
  function walkTokens(token) {                        // Post-processing on the completed token tree
    if (token.type === 'strong') {
      token.text += ' walked';
      token.tokens = this.Lexer.lexInline(token.text)
    }
  }
  marked.use({ extensions: [descriptionList, description], walkTokens });
  
  // EQUIVALENT TO:
  
  marked.use({ extensions: [descriptionList] });
  marked.use({ extensions: [description]     });
  marked.use({ walkTokens })
  
  console.log(marked.parse('A Description List:\n'
                   + ':   Topic 1   :  Description 1\n'
                   + ': **Topic 2** : *Description 2*'));


// <p>A Description List:</p>
// <dl>
// <dt>Topic 1</dt><dd>Description 1</dd>
// <dt><strong>Topic 2 walked</strong></dt><dd><em>Description 2</em></dd>
// </dl>


    mark.use({
        gfm:true,
        pedantic:false,
        breaks:false,
        renderer,
        tokenizer,
        walkTokens,
    });
}