export function searchFunction(array: any[], text: string): any[] {
  if (!text) {
    return array;
  } else if (!array) {
    return [];
  }

  let filter: any[] = array.filter((product) => {
    let splitForAutor = product.text.toLowerCase().split(text.toLowerCase());
    let splitForTitle = product.title.toLowerCase().split(text.toLowerCase());

    if (splitForAutor.length > 1 || splitForTitle.length > 1) {
      return splitForAutor.length > 1 || splitForTitle.length > 1;
    }
  });

  if (array.length) {
    return filter;
  }

  return [];
}
