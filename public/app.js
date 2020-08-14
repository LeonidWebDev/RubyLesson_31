function something() {

    let item1 = window.localStorage.getItem('xxx')

    item1 = +item1 + 1

    window.localStorage.setItem('xxx', item1)





    alert(item1)
}

function add_to_cart(id) {
    let key = 'product_' + id
    let x = window.localStorage.getItem(key)
    x = x * 1 + 1

    window.localStorage.setItem(key, x)
}