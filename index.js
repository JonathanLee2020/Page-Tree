import { fetchData } from './data.js';

// write a function that creates either a listNode or a details node
// function takes in a single plain object as a params; this objec tmay or may not have childre
// if the object has children, we create a new details node that has the node's name as the summary
// it also creates an unordered list as a child of the newNode with the class children

// write a funciton that creates the tree
// the function takes 2 params: one being a data array of objects and another being a container to append the data objects to
// if there is no data we return
// we use forEach to map over the array of objects; we can have element as a params
// if element has children, we recursively call makeTree and pass in element's children as the data array, and the newNode's child ul as the container
// at the end of the forEach loop we append the element to the container
const getEventData = async () => {
  const eventData = await fetchData();
  return eventData;
};

const treeContainer = document.querySelector('.treeContainer');

// function makeNode(object) {
//   // mine
//   let newNode;
//   if (object.children) {
//     newNode = document.createElement("details");
//     const newNodesummary = document.createElement("summary");
//     newNodesummary.textContent = object.name;
//     const childList = document.createElement("ul");
//     childList.classList.add(".children");
//     newNode.append(summary);
//     newNode.append(childList);
//   } else {
//     newNode = document.createElement("li");
//     newNode.textContent = object.name;
//   }
//   return newNode;
// }

const makeNode = (object) => {
  // mine
  let newNode;
  if (object.children) {
    newNode = document.createElement("details");
    const newNodeSummary = document.createElement("summary");
    newNodeSummary.textContent = object.name;
    newNode.append(newNodeSummary);
    const childList = document.createElement("ul");
    childList.classList.add('children');
    newNode.append(childList);
  } else {
    newNode = document.createElement("li");
    newNode.textContent = object.name;
  }
  return newNode;
}

// const makeNode = (object) => {
//   // yours
//   let newNode;
//   if (object.children) {
//     newNode = document.createElement('details');
//     const newNodeSummary = document.createElement('summary');
//     newNodeSummary.textContent = object.name;
//     newNode.append(newNodeSummary);
//     const childList = document.createElement('ul');
//     childList.classList.add('children');
//     newNode.append(childList);
//   } else {
//     newNode = document.createElement('li');
//     newNode.textContent = object.name;
//   }
//   return newNode;
// };

// function makeTree(dataArr, container) {
//   // mine
//   if (!dataArr.length) return;
//   dataArr.forEach((element) => {
//     if (element.children) {
//       const newNode = makeNode(element);
//       makeTree(element.children, newNode.querySelector(".children"));
//     }
//     container.append(newNode);
//   })
// }

function makeTree(dataArr, container) {
  // mine
  if (!dataArr.length) return;
  dataArr.forEach((element) => {
    const newNode = makeNode(element);
    if (element.children) {
      makeTree(element.children, newNode.querySelector(".children"));
    }
    container.append(newNode);
  })
}

// global objects

getEventData().then((data) => {
  makeTree(data, treeContainer);
});
