const sortBtn = document.querySelectorAll('.shop-menu__item')[0];
const showBtn = document.querySelectorAll('.shop-menu__item')[1];
const sortByName = (selector) => {
    return function () {
      const nodeList = document.querySelectorAll(selector);
      const dict = {};
      const parent = nodeList[0].parentNode;
      nodeList.forEach(node => {
        let key;
        switch (sortBtn.value) {
          case 'name': 
            key = node.querySelector('.shop__info-title').innerText; 
            break;
          case 'price': 
            key = node.querySelector('.shop__info-price').innerText.toString(); 
            break;
        }
        dict[key] = node;
        node.parentNode.removeChild(node);
      });
      const keys = Object.keys(dict);
      keys.sort().forEach(k => parent.appendChild(dict[k]));
    }
}
sortBtn.addEventListener('change', sortByName('.shop__item'));

const changeShowValue = () => {
  return function() {
    let value = showBtn.value;
    console.log(value);
    let shopArr = Array.from(shopItems);
    shopArr.map(e => e.classList.add('shop__item_hide'));
    for (let i = 0; i < value; i++) {
      shopArr[i].classList.remove('shop__item_hide');
    }
  }
}
showBtn.addEventListener('change', changeShowValue());

const shopViewTable = document.querySelector("#shop__view-table");
const shopViewList = document.querySelector("#shop__view-list");
const shopItems = document.querySelectorAll(".shop__item");

const changeShopViewList = () => {
  if (!shopItems[0].classList.contains("shop__item_wide")) {
    for (let i = 0; i < shopItems.length; i++) {
      shopItems[i].classList.toggle("shop__item_wide");
    }
  }
}

const changeShopViewTable = () => {
  if (shopItems[0].classList.contains("shop__item_wide")) {
    for (let i = 0; i < shopItems.length; i++) {
      shopItems[i].classList.toggle("shop__item_wide");
    }
  }
}
shopViewTable.addEventListener('click', changeShopViewTable);
shopViewList.addEventListener('click', changeShopViewList);
shopItems[0].addEventListener('click', () => {
  document.location.href = './shop-single.html'
  }
);