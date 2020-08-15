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

function cart_get_number_of_iems() {
    let cnt = 0
    for (let i = 0; i < window.localStorage.length; i++) {
        let key = window.localStorage.key(i) // получаем ключ
        let val = window.localStorage.getItem(key) // получаем значение

        if (key.indexOf('product_') == 0) {
            cnt = cnt + value * 1
        }
    }
    return cnt

}


function cart_get_orders() {
    let orders = ''
    for (let i = 0; i < window.localStorage.length; i++) {
        let key = window.localStorage.key(i) // получаем ключ
        let val = window.localStorage.getItem(key) // получаем значение

        if (key.indexOf('product_') == 0) {
            orders = orders + key + '=' + value + ','
        }
    }
    return orders

}