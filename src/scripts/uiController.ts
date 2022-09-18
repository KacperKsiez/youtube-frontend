import { DStr } from "./dataStructure";

class UIController {
    searchInputOnFocus() {
        let searchLeftIcon = document.querySelector(DStr.topbar.seachLeftIcon)
        let searchInput = document.querySelector(DStr.topbar.searchInput)
        searchInput.addEventListener('focus', () => {
            searchLeftIcon.classList.add(DStr.topbar.seachLeftIconActive.slice(1))
        })
        searchInput.addEventListener('blur', () => {
            searchLeftIcon.classList.remove(DStr.topbar.seachLeftIconActive.slice(1))
        })
        
    }
}

let a = new UIController()
a.searchInputOnFocus();
