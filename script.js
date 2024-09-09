function toggleDropdown(menuId) {
    const allMenus = document.querySelectorAll('.allMenu');
    allMenus.forEach(item => {
        if (item.id !== menuId) {
            item.classList.add('hidden');
        }
    });
    const menu = document.getElementById(menuId);
    menu.classList.toggle('hidden');
}

const menu = document.getElementById('menu')
const body = document.querySelector('body')

function navbar() {
    menu.style.transform = 'translateX(0)';
    if (menu.style.transform = "translateX(0)") {
        body.style.overflow = 'hidden'
    }
}

function deleteNav() {
    menu.style.transform = 'translateX(100%)';
}

const menuDropdown = document.getElementById("menuDropdown")
const menuDropdown2 = document.getElementById("menuDropdown2")
const menuDropdown3 = document.getElementById("menuDropdown3")
const menuDropdown4 = document.getElementById("menuDropdown4")
const menuDropdown5 = document.getElementById("menuDropdown5")

const menuItems = document.querySelectorAll('.menu-item');

function dropDown(menuId) {
    const allMenus = [menuDropdown, menuDropdown2, menuDropdown3, menuDropdown4, menuDropdown5];
    menuItems.forEach(item => {
        if (item.id == menuId) {
            item.classList.toggle('hidden')
        } else {
            item.classList.add('hidden')
        }
    })

}

function stopMenu(event) {
    event.stopPropagation()
}

const totalDeyer = document.getElementById('totalDeyer')
let staticCost = 0
let vebCost = 0
let seoCost = 0
let elektronCommerceCost = 0
let logoDesignCost = 0

function calculateTotalCost() {
    const minDeyer = 450
    const totalSiteCost = staticCost + vebCost + seoCost + elektronCommerceCost + logoDesignCost
    totalDeyer.textContent = `₼ ${totalSiteCost > minDeyer ? totalSiteCost : minDeyer}`
}

const numberOfPage = document.getElementById('numberOfPage')
const designOfPage = document.getElementById('designOfPage')

function calculate() {
    const pageValue = parseInt(numberOfPage.value) || 1;
    const designValue = parseInt(designOfPage.value) || 1;
    const costPage = 100
    const totalCost = pageValue * costPage * designValue

    const costText = document.getElementById('cost')
    costText.textContent = `${pageValue} səhifə / ₼ ${totalCost}`

    const staticPages = document.getElementById('staticPages')
    staticPages.textContent = `₼ ${totalCost}`

    staticCost = totalCost
    calculateTotalCost()
}
window.onload = calculate;

const toggle1 = document.getElementById('Toggle1')
const toggle2 = document.getElementById('Toggle2')
const toggle3 = document.getElementById('Toggle3')
const toggle4 = document.getElementById('Toggle4')
const toggle5 = document.getElementById('Toggle5')
const toggle6 = document.getElementById('Toggle6')
const toggle7 = document.getElementById('Toggle7')
const toggle8 = document.getElementById('Toggle8')
const toggle9 = document.getElementById('Toggle9')
const toggle10 = document.getElementById('Toggle10')
const toggle11 = document.getElementById('Toggle11')
const toggle12 = document.getElementById('Toggle12')
const toggle13 = document.getElementById('Toggle13')
const toggle14 = document.getElementById('Toggle14')
const vebValues = document.getElementById('vebValues')

const elaveler = document.getElementById('elaveler')

function calcVeb() {
    const costBlog = toggle1.checked ? 200 : 0
    const costGiris = toggle2.checked ? 400 : 0
    const costResp = toggle3.checked ? 100 : 0
    const costForm = toggle4.checked ? 400 : 0
    const costMessage = toggle5.checked ? 50 : 0
    const costLive = toggle6.checked ? 50 : 0
    const costGallery = toggle7.checked ? 100 : 0
    const costContact = toggle8.checked ? 100 : 0
    const costSearch = toggle9.checked ? 100 : 0
    const costMap = toggle10.checked ? 100 : 0
    const costRezerv = toggle11.checked ? 400 : 0
    const costSocial = toggle12.checked ? 50 : 0
    const costAnalytic = toggle13.checked ? 50 : 0
    const costAdminPanel = toggle14.checked ? 300 : 0
    const total = costBlog + costGiris + costResp + costForm + costMessage +
        costLive + costGallery + costContact + costSearch + costMap + costRezerv + costSocial +
        +costAnalytic + costAdminPanel
    vebValues.textContent = `₼ ${total}`
    elaveler.textContent = `₼ ${total}`


    vebCost = total
    calculateTotalCost()
}

const searchMotorValues = document.getElementById('searchMotorValues')
const basliqlar = document.getElementById('Basliqlar')
const acarSoz = document.getElementById('AcarSoz')
const texnika = document.getElementById('Texnika')
const basliqTeq = document.getElementById('BasliqTeq')
const siteMap = document.getElementById('Sitemap')

const seo = document.getElementById('seo')

function searchMotor() {
    const costBasliq = basliqlar.checked ? 200 : 0
    const costAcar = acarSoz.checked ? 300 : 0
    const costTexnika = texnika.checked ? 300 : 0
    const costBasliqTeg = basliqTeq.checked ? 100 : 0
    const costSiteMap = siteMap.checked ? 100 : 0
    const totalMotor = costBasliq + costAcar + costTexnika + costBasliqTeg + costSiteMap
    searchMotorValues.textContent = `₼ ${totalMotor}`
    seo.textContent = `₼ ${totalMotor}`


    seoCost = totalMotor
    calculateTotalCost()
}

const elektronCost = document.getElementById('elektronCost')
const odenis = document.getElementById('odenis')
const sebet = document.getElementById('sebet')
const mehsullar = document.getElementById('mehsullar')
const beyendiklerim = document.getElementById('beyendiklerim')
const filtr = document.getElementById('filtr')
const mehsulHagda = document.getElementById('mehsulHagda')

const eticaret = document.getElementById('eticaret')

function elektronValues() {
    const costOdenis = odenis.checked ? 200 : 0
    const costSebet = sebet.checked ? 500 : 0
    const costMehsullar = mehsullar.checked ? 300 : 0
    const costBeyen = beyendiklerim.checked ? 300 : 0
    const costfiltr = filtr.checked ? 300 : 0
    const costmehsulHagda = mehsulHagda.checked ? 200 : 0
    const totalElektron = costOdenis + costMehsullar + costSebet +
        costBeyen + costfiltr + costmehsulHagda

    elektronCost.textContent = `₼ ${totalElektron}`
    eticaret.textContent = `₼ ${totalElektron}`


    elektronCommerceCost = totalElektron
    calculateTotalCost()
}

const logoCost = document.getElementById('logoCost')
const logoId = document.getElementById('logoId')

function logoValues() {
    const logoInp = document.getElementById('logoInp').value
    const totalLogo = logoInp > 1 ? (logoInp - 1) * 100 : 0
    logoCost.textContent = `₼ ${totalLogo}`
    logoId.textContent = `₼ ${totalLogo}`

    logoDesignCost = totalLogo
    calculateTotalCost()
}
const popup = document.getElementById('popup')

let flag = true
function handlePopup() {
    popup.style.display = flag ? 'grid' : 'none'
    flag = !flag
}
function deletePopup() {
    popup.style.display = 'none'
}
function stopPopup(event){
    event.stopPropagation()
}