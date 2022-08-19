const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const menuHeight = $('.menu')
const menuBody = $('.menu__body-img')
const heading = $('.menu__header')
const menuSongName = $('.menu__body-name')
const audio = $('#audio')
const btnPlay = $('.playbtn')
const btnPause = $('.pausebtn')
const progress = $('.progress')

const app = {
    currentIndex : 0,
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
        console.log(234);
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
    defineProperties: function (){
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })  
    },
    handleEvent: function (){
        const menuBodyWidth = menuBody.offsetWidth
        const menuBodyHeight = menuBody.offsetHeight

        // Xử lí phóng to thu nhỏ cd khi scroll
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newMenuBodyWidth = menuBodyWidth - scrollTop;
            const newMenuBodyHeight = menuBodyHeight - scrollTop;
            console.log(newMenuBodyHeight, newMenuBodyWidth)
            menuBody.style.width = newMenuBodyWidth > 0 ? newMenuBodyWidth + 'px' : 0;
            menuBody.style.height = newMenuBodyHeight > 0 ? newMenuBodyHeight + 'px' : 0;
            menuBody.style.opacity = newMenuBodyWidth / menuBodyWidth; 
            }
        // Xử lí khi click play
        btnPlay.onclick = function() {
            audio.play();
        },
        btnPause.onclick = function() {
            audio.pause();
        }
        audio.onpause = function() {
            btnPause.classList.remove('active')
            btnPlay.classList.add('active');
        }
        audio.onplay = function() {
            btnPause.classList.add('active')
            btnPlay.classList.remove('active')
        }   
        // khi tien do bai hat thay doi
        audio.ontimeupdate = function() {
            if(audio.durations){
            const progessPercent = Math.floor(audio.currentTime / audio.duration * 100)
            progress.value = progessPercent;
        }
        }
        progress.onchange = function(e) {
            var seek = (audio.duration / 100 * e.target.value)
            audio.currentTime= seek

        }
    },
    loadCurrentSong: function (){
        // console.log(this.currentSong)
        menuSongName.textContent = this.currentSong.name
        menuBody.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path

    },
    // gget playlist
    fixPlayList: function(){
        const playList = $('.playlist')
        playList.style.marginTop = menuHeight.clientHeight +'px'
        console.log(menuHeight.clientHeight)
    },
    start : function () {
        // Định nghĩa các thuộc tính cho Object
        this.defineProperties();
        // Lắng nghe và xử lí các sự kiện (DOM Events)
        this.handleEvent();
        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();
        // Render lại playlist
        this.render();
        this.fixPlayList();
        // console.log(menuHeight);
        

    }

}
app.start()

