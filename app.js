document.addEventListener("alpine:init", () => {
  Alpine.data("menuFilter", () => ({
    selectedCategory: "all",
    items: [
      {
        id: 1,
        category: "coffee",
        name: "frappucino",
        img: "coffee_frappucino.png",
        price: 20,
        description:
          "A creamy, blended iced coffee topped with whipped cream, offering a rich, sweet, and indulgent treat.",
        nutrition: "100kkal, 10g sugar, 3g cafein",
      },
      {
        id: 2,
        category: "coffee",
        name: "cafe mocha",
        img: "coffee_cafemocha.png",
        price: 21,
        description:
          "A perfect fusion of espresso, velvety steamed milk, and chocolate, finished with a dusting of cocoa powder.",
        nutrition: "101kkal, 11g sugar, 4g cafein",
      },
      {
        id: 3,
        category: "coffee",
        name: "caramel macchiato",
        img: "coffee_caramelmacchiato.png",
        price: 22,
        description:
          "Espresso layered with steamed milk and vanilla, crowned with a luscious drizzle of caramel.",
        nutrition: "102kkal, 12g sugar, 5g cafein",
      },
      {
        id: 4,
        category: "coffee",
        name: "americano",
        img: "coffee_americano.png",
        price: 24,
        description:
          "Smooth and bold espresso diluted with hot water, delivering a rich, robust, and simple coffee experience.",
        nutrition: "103kkal, 13g sugar, 6g cafein",
      },
      {
        id: 5,
        category: "ricebowl",
        name: "ricebowl 1",
        img: "ricebowl_1.png",
        price: 25,
        description: "This is rice bowl 1",
        nutrition: "400kkal, 20g protein, 13g fat",
      },
      {
        id: 6,
        category: "ricebowl",
        name: "ricebowl 2",
        img: "ricebowl_2.png",
        price: 26,
        description: "This is rice bowl 2",
        nutrition: "401kkal, 21g protein, 14g fat",
      },
      {
        id: 7,
        category: "ricebowl",
        name: "ricebowl 3",
        img: "ricebowl_3.png",
        price: 27,
        description: "This is rice bowl 3",
        nutrition: "402kkal, 22g protein, 15g fat",
      },
      {
        id: 8,
        category: "ricebowl",
        name: "ricebowl 4",
        img: "ricebowl_4.png",
        price: 28,
        description: "This is rice bowl 4",
        nutrition: "403kkal, 23g protein, 16g fat",
      },
      {
        id: 9,
        category: "ricebowl",
        name: "ricebowl 5",
        img: "ricebowl_5.png",
        price: 29,
        description: "This is rice bowl 5",
        nutrition: "404kkal, 24g protein, 17g fat",
      },
      {
        id: 10,
        category: "mocktail",
        name: "mocktail 1",
        img: "mocktail_1.png",
        price: 15,
        description: "This is mocktail 1",
        nutrition: "40kkal, 11g sugar",
      },
      {
        id: 11,
        category: "mocktail",
        name: "mocktail 2",
        img: "mocktail_2.png",
        price: 16,
        description: "This is mocktail 2",
        nutrition: "40kkal, 12g sugar",
      },
      {
        id: 12,
        category: "mocktail",
        name: "mocktail 3",
        img: "mocktail_3.png",
        price: 17,
        description: "This is mocktail 3",
        nutrition: "40kkal, 13g sugar",
      },
      {
        id: 13,
        category: "mocktail",
        name: "mocktail 4",
        img: "mocktail_4.png",
        price: 18,
        description: "This is mocktail 4",
        nutrition: "40kkal, 14g sugar",
      },
    ],
    isModalOpen: false,
    modalItem: null,

    get groupedMenu() {
      let groups = {};
      const itemsToFilter = this.selectedCategory === 'all' 
        ? this.items 
        : this.items.filter(item => item.category === this.selectedCategory);
      itemsToFilter.forEach(item => {
        if (!groups[item.category]) groups[item.category] = [];
        groups[item.category].push(item);
      });
      return groups;
    },
    filter(category) {
      this.selectedCategory = category;
    },

    openModal(item) {
      this.modalItem = item;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.modalItem = null;
    },

    initLazyLoad() {
      const lazyImages = document.querySelectorAll(".lazy");
      console.log("Initializing lazy load for images...");

      let observedImages = new Set();
      const lazyLoad = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Mengganti data-src ke src
            img.onload = () => {
              img.classList.remove("lazy"); // Menghapus kelas lazy
              img.style.filter = "none"; // Menghilangkan efek blur
              img.style.visibility = "visible";
            };

            observer.unobserve(img);
            console.log(`Loading image: ${img.dataset.src}`);
          }
        });
      };

      const observer = new IntersectionObserver(lazyLoad, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      });

      lazyImages.forEach((img) => {
        if (!observedImages.has(img)) {
          observer.observe(img);
          observedImages.add(img);
        }
      });
    },
  }));
});
