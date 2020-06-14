export default function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(arrayElement => arrayElement.url.match(searchTerm));
}