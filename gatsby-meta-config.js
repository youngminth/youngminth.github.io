module.exports = {
  title: `youngmin's blog`,
  description: `송영민 (안드로이드 개발자)`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://youngminth.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `송영민`,
    bio: {
      role: `개발자`,
      description: ['더 좋은 사용자 경험을 제공하는', '더 나은 환경을 만드는', '늘 내가 만든 앱을 사용하는 사람들을 위해  끝 없이 고민하는'],
      thumbnail: 'youngmin_emoji.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/youngminth`,
      linkedIn: `https://www.linkedin.com/in/영민-송-9b971218a`,
      email: `skyisu123@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2017.10.16 ~ 현재 재직',
        activity: '(주)유성소프트 입사',
        links: {
          post: 'http://ussoft.co.kr/',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2017.11.16 ~ 2018.02.01',
        activity: '(주)엔캣 WMS 앱 개발 및 운영',
        links: {
          post: 'https://n-cat.co.kr/',
          googlePlay: 'http://pda.n-cat.kr/wms/',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2017.12.01 ~ 2018.04.01',
        activity: '(주)위비스 RFID 앱 개발 및 운영',
        links: {
          googlePlay: 'http://mob.wivis.com/wms/',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2018.02.01 ~ 2018.07.01',
        activity: '(주)케이투코리아 RFID 앱 개발 및 운영',
        links: {
          post: 'https://k2group.co.kr/main/',
          googlePlay: 'http://mob.k2.co.kr/shop/',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2018.05.01 ~ 2018.07.01',
        activity: '(주)리앤한 RFID 앱 개발 및 운영',
        links: {
          post: 'http://www.leenhan.com/',
          googlePlay: 'http://mob.leenhan.com/shop/',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2019.04.01 ~ 2019.06.01',
        activity: '(주)이랜드 스파오 매장 재고조회 키오스크 앱 개발',
        links: {
          post: 'https://www.paxetv.com/news/articleView.html?idxno=95836/',
          demo: 'https://youtu.be/t05RfAmxU8c/',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2019.12.01 ~ 2020.06.01',
        activity: '(주)에프엔에프 RFID 앱 개발 및 운영',
        links: {
          post: 'https://www.fnf.co.kr/pages/main/main.php/',
          googlePlay: 'https://rfid.fnf.co.kr/apk/shop/',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2019.12.01 ~ 2020.06.01',
        activity: '(주)삼성물산 패션부문 8S RFID 앱 개발 및 운영',
        links: { },
      },
      // ========================================================
      // ========================================================
      {
        date: '2020.11.01 ~ 2020.12.01',
        activity: '사내 C/S RFID 웹 어플리케이션 개발',
        links: {
          post: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2020.12.01 ~ 2021.02.01',
        activity: '한국전화번호부 통화 종료 후 자동 SMS/MMS 발송 앱 개발',
        links: {
          googlePlay: 'https://m.onestore.co.kr/mobilepoc/apps/appsDetail.omp?prodId=0000755577/'
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.03.01 ~ 2021.08.01',
        activity: '(주)한성에프아이 RFID 앱 개발 및 운영',
        links: {
          googlePlay: 'http://rfid.hansungfi.co.kr/apk/shop/'
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.08.01 ~ 2021.12.01',
        activity: '밥상EIS 크로스 플랫폼 앱 개발',
        links: {
          googlePlay: 'https://was.ubob.biz/eis/apk/BobsangEIS/',
          appStore: 'https://apps.apple.com/kr/app/밥상eis/id1620518213/',
          demo: 'https://youtu.be/OM-ee5LL7SI/'
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.02.01 ~ 2022.03.01',
        activity: '(주)대현 WMS 앱 개발',
        links: {
          googlePlay: 'https://cloud.bobsang.biz/mws/apkDown/daehyun/wms/',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.03.01 ~ 2022.04.01',
        activity: '(주)네파 WMS 앱 개발',
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.07.01 ~ 2022.10.01',
        activity: '(주)독립문 WMS 앱 개발',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
