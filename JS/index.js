const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const menuHeight = $('.menu').clientHeight
const playList = $('.playlist')

const app = {
    songs: [
            {
                name: "Thanh Xuân",
                singer : "Da LAB",
                path: "/assets/song/Thanh Xuân - Da LAB (Official MV).mp3",
                image: "/assets/img/song/thanhxuan.jpg"
            },
            {
                name: 'Sài gòn đau lòng quá',
                singer : 'Hứa Kim Tuyền x Hoàng Duyên',
                path: '/assets/song/sai gon dau long qua.mp3',
                image: '/assets/img/song/saigndaulongqua.jpg'
            },
            {
                name: 'Có chàng trai viết nên cây',
                singer : 'Hứa Kim Tuyền x Hoàng Duyên',
                path: '/assets/song/Có Chàng Trai Viết Lên Cây - Phan Mạnh Quỳnh - MẮT BIẾC OST.mp3',
                image: '/assets/img/song/cochangtraivietnencay.jpg'
            },
            {
                name: 'Không thể cùng nhau suốt kiếp',
                singer : 'Hòa Minzy (ft. Mr. Siro)',
                path: '/assets/song/KHÔNG THỂ CÙNG NHAU SUỐT KIẾP - HOÀ MINZY (ft. MR. SIRO) - OFFICIAL MUSIC VIDEO.mp3',
                image: '/assets/img/song/khongthecungnhausuotkiep.jpg'
            },
            {
                name: 'Kiếp chống chung',
                singer : 'Bùi Công Nam',
                path: '/assets/song/Kiếp Chồng Chung - Bùi Công Nam - Ma OST - Official MV.mp3',
                image: '/assets/img/song/kiepchongchung.jpg'
            },
            {
                name: 'Ngày đầu tiên',
                singer : 'Đức Phúc',
                path: '/assets/song/NGÀY ĐẦU TIÊN - ĐỨC PHÚC - OFFICIAL MUSIC VIDEO - VALENTINE 2022.mp3',
                image: '/assets/img/song/ngaydautien.jpg'
            },
            {
                name: 'Thằng điên',
                singer : 'Justatee x Phương Ly',
                path: '/assets/song/THẰNG ĐIÊN - JUSTATEE x PHƯƠNG LY - OFFICIAL MV.mp3',
                image: '/assets/img/song/thanhxuan.jpg'
            },
            {
                name: 'Ước mơ của mẹ',
                singer : 'Justatee x Phương Ly',
                path: '/assets/song/Ước Mơ Của Mẹ - CARA x CM1X.mp3',
                image: '/assets/img/song/uocmocuame.jpg'
            },
        
    
    
    ],
    render: function (){
        const htmls = this.songs.map(song => {
            return `
            <div class="playlist__song-wrap">
                <div class="playlist__song">
                    <div class="playlist__song-img" style="
                    background-image: url(${song.image});
                    "></div>
                    <div class="playlist__song-info">
                        <div class="playlist__song-info-name">${song.name}</div>
                        <div class="playlist__song-info-singer">${song.singer}</div>
                    </div>
                </div>
                <div class="playlist__option">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div> 
            `
        })
        $('.playlist').innerHTML = htmls.join('')
    },
    handleEvent: function (){
        const menuBody = $('.menu__body-img')
        const menuBodyWidth = menuBody.offsetWidth
        const menuBodyHeight = menuBody.offsetHeight
        
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newMenuBodyWidth = menuBodyWidth - scrollTop;
            const newMenuBodyHeight = menuBodyHeight - scrollTop;
            console.log(newMenuBodyHeight);
            menuBody.style.width = newMenuBodyWidth > 0 ? newMenuBodyWidth + 'px' : 0;
            menuBody.style.height = newMenuBodyHeight > 0 ? newMenuBodyHeight + 'px' : 0;
                
            }
        
    },
    // gget playlist
    fixPlayList: function(){
        playList.style.marginTop = menuHeight + 10 +'px'
    },
    start : function () {
        this.render();
        this.handleEvent();
        this.fixPlayList();
    }

}
app.start()

