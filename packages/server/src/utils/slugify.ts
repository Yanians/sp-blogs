
export function slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')   // remove non-word characters
      .trim()
      .replace(/\s+/g, '-')       // replace spaces with -
  }
