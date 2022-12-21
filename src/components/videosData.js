const videosData = [
  {
    id: 1,
    title: 'Peter & Gwen || We Might Fall',
    channelName: 'Eduardo AJ Aliaga',
    username: 'eduardo-aj-aliaga',
    thumbnail:
      'https://i.ytimg.com/vi/7MP2z_FDQNw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAet7rHRHbQVwpZzL6oFfBivFbQ4A',
    videosrc:
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4',
    channelPic:
      'https://yt3.ggpht.com/U7OwZOXP9jOvuioi-DS_hH4-F_rNBbUfEcJwlmNrVyvBV0u9rFfYjZQQUyhodLNYLTcOCwxSaQ=s176-c-k-c0x00ffffff-no-rj-mo',
    views: '4000',
    time: '5 months ago'
  },
  {
    id: 2,
    title:
      'Raksha Bandhan Movie Review : Regressive Or Misunderstood? | Akshay Kumar, Bhumi Pednekar',
    channelName: 'Tried&Refused Productions.',
    username: 'tried&refused-productions',
    thumbnail:
      'https://i.ytimg.com/vi/ZGJwVj7DDfE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1nhxxGDvwtzhz__t99WSrjidm5Q',
    videosrc:
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4',
    channelPic:
      'https://yt3.ggpht.com/ytc/AMLnZu8WNOupy-L0-keJs9nlA5ieU_Sc6cpGrcKSt5G00Q=s68-c-k-c0x00ffffff-no-rj',
    views: '203000',
    time: '1 day ago'
  },
  {
    id: 3,
    title: 'Samsung Galaxy Flip 4 & Fold 4 First Look ! *VLOG*',
    channelName: 'Tech Burner',
    username: 'tech-burner',
    thumbnail:
      'https://i.ytimg.com/vi/vtddIgvSBao/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8bNU-Uhj0-aTUE2nB2csuhCNIzw',
    videosrc:
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4',
    channelPic:
      'https://yt3.ggpht.com/ytc/AMLnZu-Sn_MvkkHF0uNdbQzS2t-kI5BwBqSeCFJhkN2vnQ=s68-c-k-c0x00ffffff-no-rj',
    views: '915000',
    time: '3 day ago'
  },
  {
    id: 4,
    title: 'Karthikeya 2 MOVIE REVIEW | Yogi Bolta Hai',
    channelName: 'YOGI BOLTA HAI',
    username: 'yogi-bolta-hai',
    thumbnail:
      'https://i.ytimg.com/vi/wYilNLx5EdM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuA5bNEfzs52_fryUxpzMBIWf__w',
    videosrc:
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4',
    channelPic:
      'https://yt3.ggpht.com/ytc/AMLnZu9JoaBBze1tp7F15BOw-IehKTZ8Bj_OgqEnQoKPUw=s68-c-k-c0x00ffffff-no-rj',
    views: '194000',
    time: '3 hours ago'
  },
  {
    id: 5,
    title: 'I saw Raksha Bandhan movie in Theater & I Regret it so much 😭',
    channelName: 'BnfTV',
    username: 'bnftv',
    thumbnail:
      'https://i.ytimg.com/vi/dP_jvxuRviE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4y-dUZ8WVSlhWIOiYamol6KMy-A',
    videosrc:
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4',
    channelPic:
      'https://yt3.ggpht.com/7oUYOkSQuvixFZonWiR_AC7uKfMyoqRCnSBpmH-V_KUry2QgeSK2zHUDlYoLtG9xfTR-2e_NJA=s68-c-k-c0x00ffffff-no-rj',
    views: '432000',
    time: '2 days ago'
  },
  {
    id: 6,
    title:
      'Kesariya - Brahmāstra | Ranbir Kapoor | Alia Bhatt | Pritam | Arijit Singh | Amitabh Bhattacharya',
    channelName: 'Sony Music India',
    username: 'sony-music-india',
    thumbnail:
      'https://i.ytimg.com/vi/BddP6PYo2gs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkH6mntazw0BSfrHhPwTiqmBIZuQ',
    videosrc:
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4',
    channelPic:
      'https://yt3.ggpht.com/vJEsALWnQIwPZ2oaVbFWPu1n4L0CDkHpAdGJ-KBPFsxM9hsMsvExFK1mnCGUrMzfC67XPVThmQ=s68-c-k-c0x00ffffff-no-rj',
    views: '120000000',
    time: '4 weeks ago'
  },
  {
    id: 7,
    title: 'C++ Tutorial for Beginners - Learn C++ in 1 Hour',
    channelName: 'Programming with Mosh',
    username: 'programming-with-mosh',
    thumbnail:
      'https://i.ytimg.com/vi/ZzaPdXTrSb8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcOe9VKrCHSYH_wLdxNUK0IhNtOQ',
    videosrc:
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4',
    channelPic:
      'https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s68-c-k-c0x00ffffff-no-rj',
    views: '50000',
    time: '3 days ago'
  },
  {
    id: 8,
    title: 'C++ Tutorial for Beginners - Learn C++ in 1 Hour',
    channelName: 'Labour Law Advisor',
    username: 'labour-law-advisor',
    thumbnail:
      'https://i.ytimg.com/vi/luVJ8rARtuQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhok8CRK_dEvrHTeJWq0bdp59nSQ',
    videosrc:
      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4',
    channelPic:
      'https://yt3.ggpht.com/CVvE7vApeq2jgHhty_LsDBVJPnp-msvs7r3spAZo_14T_nBqd1CWTjhUdjg1TTAztO7MOxu2=s176-c-k-c0x00ffffff-no-rj-mo',
    views: '919000',
    time: '6 months ago'
  }
]

export default videosData
