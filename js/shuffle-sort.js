/**
 * @name shuffledTiles
 * @param {*} items
 * @description The function is used to shuffle the items
 * @returns shuffledItems
 */
const shuffledTiles = (elements) => {
  let shuffleTiles = elements.slice(0);
  let temp;
  let i = shuffleTiles.length;
  let random;
  while (--i) {
    random = Math.floor(i * Math.random());
    temp = shuffleTiles[random];
    shuffleTiles[random] = shuffleTiles[i];
    shuffleTiles[i] = temp;
  }
  return shuffleTiles;
}

window.onload = () => {
  let list = document.getElementById("shuffle-sort-tiles");

  /**
   * @name shuffleNodes
   * @param none
   * @description method to shuffle the tiles on click of Shuffle Button
   * @returns none
   */
  const shuffleAllTiles = () => {
    let nodes = list.children;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffledTiles(nodes);
    domManipulation(nodes);
  }


  const domManipulation=(nodes)=>{
    let i=0;
    const fragment = document.createDocumentFragment();
    while (i < nodes.length) {
      fragment.appendChild(nodes[i]);
      ++i;
    }
    list.appendChild(fragment);
  }

  /**
   * @name sortTiles
   * @param none
   * @description method to sort the tiles on click of sort button
   * @returns none
   */
  const sortTiles = () => {
    let items = list.childNodes;
    let tilesArr = [];
    for (let i in items) {
      if (items[i].nodeType == 1) {
        tilesArr.push(items[i]);
      }
    }

    tilesArr.sort((a, b) => {
      return a.innerHTML == b.innerHTML
        ? 0
        : a.innerHTML > b.innerHTML
        ? 1
        : -1;
    });

    domManipulation(tilesArr);
  }

  // On-click Button events

  document.getElementById("sort-btn").onclick = sortTiles;
  document.getElementById("shuffle-btn").onclick = shuffleAllTiles;
};
