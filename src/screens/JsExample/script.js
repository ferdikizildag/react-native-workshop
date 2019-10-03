import _ from 'lodash';

const loadPage = async (country) => {
    // let data = [1, 2, 3];
    // let json = {
    //     ad: 'Ferdi'
    // }
    // for(var i = 0; i < 10; i++){
    //     let y=5
    //     0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    //  }
    // let isim = 999 + ''
    // const kimlik = {
    //     ad: "Murat",
    //     soyad: "Elicaliskan",
    //     yas: 30,
    //     isim: function () {
    //         return generateIsim(country,this.ad)
    //     }
    // };
    // console.log(kimlik.isim())
    // sozVerdik.then(function (cevap) {
    //     console.log(cevap) // 'İşlem tamam!' yazısını basar
    // }).catch(function (hata) {
    //     console.log(hata) // 'Bir sıkıntı var...' yazısını basar
    // })
    // getCity(0).then((e) => {
    //     alert(e)
    // }).catch((e) => {
    //     alert(e)
    // })
    // await asyncFunc();
    // console.log('xxx')
    var  asd= _.lowerCase('ASDsdasd')
    alert(asd)
}

const asyncFunc = async () => {
    const data = await fetch(`https://api.github.com/users/ferdikizildag/repos?page=1&per_page=10`)
        .then(response => response.json())
        .then((response) => {
            return response;
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.log('Request failed', error);
        })
    console.log(data[0].clone_url)
}

const generateIsim = (ad) => {
    return ad;
}
const loadPage2 = () => {
    alert('Loaded2')
}

const getCity = (id) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (id === 0) {
                resolve('İşlem tamam!');
            } else {
                reject('Bir sıkıntı var...');
            }
        }, 300)
    })
}

const data = {
    loadPage: loadPage,
    loadPage2: loadPage2
}
export { loadPage, loadPage2 };
export default data;
