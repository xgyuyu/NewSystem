/*
  定义接口方法
*/
import {notification} from 'antd'
import createHistory from 'history/createHashHistory'
let history = createHistory()

let messageShowed = false

function showMessage(msg, fn = () => {}) {
    if (!messageShowed) {
        messageShowed = true
        notification.open({
            message: '提醒',
            description: msg,
        })
        setTimeout(() => {
            messageShowed = false
            fn()
        }, 3000)
    }
}

export function routerPush(url) {
    history.push(url)
}

export function goback() {
    history.goBack()
}

export function checkLogin() {
    if (localStorage.getItem('username') === '' || localStorage.getItem('username') == null || localStorage.getItem('username') == undefined) {
        routerPush('/login')
    }
}

// 给get方法拼接参数
export function getUrl(url, params) {
    if (params) {
        let paramsArray = []
        //拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return url
}

// async
export async function fetchData(url, configObj) {
    // let Url = baseUrl + url
    const res = await fetch(url, Object.assign({
        headers: {
            'content-type': 'application/json'
        }
    }, configObj)).then(function (res) {
        return res
    }).catch(function (err) {
        console.log(err)
        showMessage(err)
        return err
    })
    return res.json()
}

export function echartData(l, title, type1) {
    let data = type1 === 'percent' ? (l || []).map(a => a.yearsAvgGrowthRate) : (l || []).map(a => a.orgVal)
    return {
        yAxis: [{
            type: 'value',
        }, ],
        tooltip: {
            trigger: 'axis',
        },
        xAxis: [{
            type: 'category',
            data: (l || []).map(a => a.ZZND || ''),
            axisLabel: {
                show: true,
                rotate: 45,
            }
        }, ],
        legend: {
            data: [title],
        },
        series: [{
            type: 'line',
            name: title,
            data: data
        }]
    }
}
