// Shuffle the images array
let imagesArray = [
  {
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1ipeQbFseUM_GzxwMoQj45w9HtAnu4eu5w&s",
    title: "Mountain landscape with sunset",
    category: "nature",
  },
  {
    image_url:
      "https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg",
    title: "Holding a tree in a ball - Ecology concept",
    category: "nature",
  },
  {
    image_url:
      "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
    title: "Abstract Autumn Leaf Vein Pattern",
    category: "nature",
  },
  {
    image_url:
      "https://static.vecteezy.com/system/resources/thumbnails/041/166/062/small/ai-generated-hawk-high-quality-image-free-photo.jpg",
    title: "AI-generated Hawk",
    category: "nature",
  },
  {
    image_url:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    title: "Abstract AI Artwork",
    category: "nature",
  },
  {
    image_url: "https://cdn.esawebb.org/archives/images/screen/weic2425a.jpg",
    title: "Space Nebula",
    category: "nature",
  },
  {
    image_url:
      "https://images.pexels.com/photos/289998/pexels-photo-289998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Snow-covered Trees in Winter",
    category: "nature",
  },
  {
    image_url:
      "https://cdn.pixabay.com/photo/2022/05/23/11/26/tree-7215935_1280.jpg",
    title: "Beautiful Tree Landscape",
    category: "nature",
  },
  {
    image_url:
      "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    title: "Nature Scene with Sky and Grass",
    category: "nature",
  },
  {
    image_url:
      "https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VyZW5pdHl8ZW58MHx8MHx8fDA%3D",
    title: "Serenity in Nature",
    category: "nature",
  },
  {
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&s",
    title: "Tree in a Forest",
    category: "nature",
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let inputEl = document.getElementById("input");
let buttonEl = document.getElementById("button");
let imagesContainerEl = document.getElementById("images-container");

function handleInput() {
  let inputValue = inputEl.value;
  if (inputValue < 0) {
    alert("enter an valid image");
    imagesContainerEl.innerHTML = "";
  } else {
    shuffleArray(imagesArray);
    let imagesToDisplay = imagesArray.slice(0, inputValue);
    buttonEl.addEventListener("click", handleButton);

    function handleButton() {
      imagesContainerEl.innerHTML = "";

      imagesToDisplay.forEach((image) => {
        let imageEl = document.createElement("img");
        imageEl.src = image.image_url;
        imageEl.classList.add("imageStyle");
        imagesContainerEl.appendChild(imageEl);
      });
    }
  }
}