export function getDateFromText(string:string){
    let array:string[]|null = string.match(/\d+[./]\d+[./]\d\d\d\d/g);
    return (array !== null) ? (array.length === 1) ? array[0] : array[0]+","+array[array.length-1] : "";
}