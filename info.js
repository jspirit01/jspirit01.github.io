let info = {
  name: "JooYeong Kim",
  logo_name: "JooYeong",
  flat_picture: require("./src/assets/picture.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I am a researcher specializing in Human-Computer Interaction. My research focuses on human-centered AI systems that enhance usability and accessibility. I identify challenges people encounter in real-world contexts and develop systems that effectively support their needs. I enjoy applying recent AI technologies to my work and exploring how AI can practically support human. <br><br> I completed my Ph.D. 🎓 in School of Integrated Technology at <a href=\"https://www.gist.ac.kr/en/main.html\" style=\"text-decoration: none;\" target=\"_blank\">GIST</a>, where I was advised by <a href=\"https://scholar.google.com/citations?user=iTu5G9QAAAAJ&hl=en\" style=\"text-decoration: none;\" target=\"_blank\">Jin-Hyuk Hong</a> in <a href=\"https://sci.gist.ac.kr/sci/\" style=\"text-decoration: none;\" target=\"_blank\">SCI Lab</a>. I am currently continuing my research as a postdoctoral researcher in <a href=\"https://ai.gist.ac.kr/aieng/index.do\" style=\"text-decoration: none;\" target=\"_blank\">Department of AI Convergence</a> at GIST.",
  links: {
    scholar: "https://scholar.google.com/citations?user=8GXb90gAAAAJ",
    github: "https://github.com/jspirit01",
    homepage: "https://sci.gist.ac.kr",
    resume: "http://jspirit01.github.io/CV"
  },
  education: [
    {
      name: "Gwangju Institute of Science and Technology (GIST), Republic of Korea",
      date: "February, 2019 - Now",
      degree: "Ph.D Candidate, Culture Technology Program, School of Integrated Technology",
      gpa: "",
      description:
        "",
      skills: [
        "Human Computer Interaction",
        "Human-AI Interaction",
        "Natural Langauge Processing",
        "Application Design"
      ]
    },
    {
      name: "Hongik University, Republic of Korea",
      date: "March, 2014 - February, 2019",
      degree: "B.S in Computer Engineering",
      gpa: "GPA: 4.1/4.5",
      description:
        "",
      skills: [
        "AI",
        "Neural Netwroks",
        "Data Mining",
        "Computer Vision",
        "Pattern Recognition",
        "HCI",
        "Software Engineering"
      ]
    }
  ],
  experience: [
    {
      name: "Accepted to CHI 2022!",
      place: "",
      date: "February 10, 2022",
      position: "",
      description:
        "Our paper has been conditionally accepted to CHI 2022: \"We Play and Learn Rhythmically: Gesture-based Rhythm Game for Children with Intellectual Developmental Disabilities to Learn Manual Sign\"",
      skills: ["Children with IDD", "Manual sign learning", "Gamification", "Rhythm game", "Human computer interaction"]
    },
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python**",
        "C",
        "C++",
        "C#",
        "Javascript",
        "Java",
      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "Pytorch",
        "Huggingface",
        "Keras",
        "Scikit-learn",
        "Numpy",
        "Pandas"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Flask", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["Neo4j"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "Ubuntu",
        "Windows",
        "MacOS",
        "Android",
        "Unity"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Photoshop"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    // {
    //   name: "VOVI: Voice-Visualized Message Interactions",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/vovi/system.png")
    //     }
    //   ],
    //   technologies: [
    //     'Voice Messaging', 'Voice Visualization', 'Smartwatch'
    //   ],
    //   category: "HCI",
    //   date: "May. 2024 – Sep. 2024",
    //   visit: "",
    //   description:
    //     "Voice messages have surged as an effective communication medium, offering convenience and rich paralinguistic cues. However, their reliance on audio playback often restricts message review in various situations. While transcriptions and teasers are helpful, they still require users to find a private place to listen to the audio. To address this limitation, we present VOVI, a voice-visualized messaging system that enables comprehensive message review in environments where audio playback is impractical. Building on careful design rationales, we integrate visualization features into a smartwatch-based voice messaging interface. The system automatically detects speech nuances and proposes customizable visualized transcriptions. A user study with 10 pairs of participants demonstrated that VOVI's transcriptions effectively capture speech content and paralinguistic cues, allowing senders to effortlessly express nuances and receivers to intuitively understand them without audio. Our findings suggest that voice visualization significantly enhances voice message interactions and offer insights for designing future voice messaging systems."
    // },
    {
      name: "OnomaCap: Making Non-speech Sound Accessible",
      pictures: [
        {
          img: require("./src/assets/portfolio/onomacap/study-outline.png")
        }
      ],
      technologies: [
        'Onomatopoeia', 'Non-speech Sound', 'Accessibility', 'Deaf/Hard-of-Hearing'
      ],
      category: "HCI",
      date: "Jan. 2023 – Sep. 2024",
      visit: "",
      description:
        "Non-speech sounds play an important role in setting the mood of a video and aiding comprehension. However, current non-speech sound captioning practices focus primarily on sound categories, which fails to provide a rich sound experience for deaf and hard-of-hearing (DHH) viewers. Onomatopoeia, which succinctly captures expressive sound information, offers a potential solution but remains underutilized in non-speech sound captioning. This paper investigates how onomatopoeia benefits DHH audiences in non-speech sound captioning. We collected 7,962 sound-onomatopoeia pairs from listeners and developed a sound-onomatopoeia model that automatically transcribes sounds into onomatopoeic descriptions indistinguishable from human-generated ones. A user evaluation of 25 DHH participants using the model-generated onomatopoeia demonstrated that onomatopoeia significantly improved their video viewing experience. Participants most favored captions with onomatopoeia and category, and expressed a desire to see such captions across genres. We discuss the benefits and challenges of using onomatopoeia in non-speech sound captions, offering insights for future practices. <a href=\"https://jspirit01.github.io/onomacap/\">[project page]</a> "
    },
    {
      name: "Auto-punctuation Caption System",
      pictures: [
        {
          img: require("./src/assets/portfolio/autopunc/image.png")
        }
      ],
      technologies: [
        'Speech style', 'Sound visualization', 'Accessibility', 'Deaf/Hard-of-Hearing'
      ],
      category: "HCI",
      date: "Mar. 2023 - Dec. 2023",
      visit: "",
      description:
        "Speech styles such as extension, emphasis, and pause play an important role in capturing the audience’s attention and conveying a message impressively. Unfortunately, it is challenging for Deaf and Hard-of-Hearing (DHH) people to enjoy these benefits when watching lectures with common captions. In this paper, we propose a new caption system that automatically analyzes speech styles from audio and visualizes them using visualization elements such as punctuation, paint-on, color, and boldness. We conducted a comparative study with 26 DHH viewers and found that the proposed caption system enabled them to recognize the speaker’s speech style in lectures. As a result, the DHH viewers were able to watch lecture videos more vividly and were more engaged with the lectures. In particular, punctuation can be a practical solution to visualize speech styles and ensure legibility. Participants expressed a desire to use our caption system in their daily lives, providing valuable insights for future sound-visualized caption research."
    },
    {
      name: "Visible Nuances Caption System",
      pictures: [
        {
          img: require("./src/assets/portfolio/caption/Figure1.png")
        },
        {
          demo: require("./src/assets/portfolio/caption/advanced_lecture2.mp4")
        },
        {
          demo: require("./src/assets/portfolio/caption/advanced_misty3.mp4")
        }
      ],
      technologies: [
        'Captioning system', 'Sound visualization', 'Accessibility', 'Deaf/Hard-of-Hearing'
      ],
      category: "HCI",
      date: "Mar. 2022 - Dec. 2022",
      visit: "",
      description:
        "Captions help deaf and hard-of-hearing (DHH) individuals visually communicate voice information to better understand video content. In speech, the literal content and paralinguistic cues (e.g., pitch and nuance) work together to create real intention. However, current captions are limited in their capacity to deliver fine nuances because they cannot fully convey these paralinguistic cues. This paper proposes an audio-visualized caption system that automatically visualizes paralinguistic cues into various caption elements (thickness, height, font type and motion). A comparative study with 20 DHH participants demonstrates how our system supports DHH individuals to be better accessible to paralinguistic cues while watching videos. Particularly in the case of formal talks, they could accurately identify the speaker’s nuance more often compared to current captions, without any practice or training. Addressing some issues on legibility and familiarity, the proposed caption system has potentials to enrich DHH individuals’ video watching experience more as hearing people enjoy."
    },
    {
      name: "Interactive Museum Labels",
      pictures: [
        {
          img: require("./src/assets/portfolio/museum/2023.png"),
          demo: require("./src/assets/portfolio/museum/museum_demo.mp4")
        },
      ],
      technologies: [
        'Museum experience', 'Interaction design', 'Accessibility', 'Deaf/Hard-of-Hearing'
      ],
      category: "HCI",
      date: "Jan. 2020 - Dec. 2022",
      visit: "",
      description:
        "Text descriptions in museums provide detailed and rich information about artifacts that broadens museum visitors’ knowledge and enriches their experience. However, since deaf and hard-of-hearing (DHH) individuals have low literacy compared to hearing people and communicate through sign language, museum descriptions are considerably limited in delivering a stimulating and informative environment for understanding and enjoying exhibits. To improve DHH individuals’ museum experience, we investigated the potential of three interactive description prototypes: active-linked, graph-based, and chatbot-based. A comparative study with 20 DHH participants confirmed that our interaction-based prototypes improve information accessibility and provide an enhanced experience compared to conventional museum descriptions. Most participants preferred the graph-based prototype, while post-interviews suggested that each prototype has potential benefits and limitations according to DHH individual’s particular literacy skills and preferences. Text descriptions can be enlivened for DHH visitors by adding simple interaction functionality, e.g., clicking, which can lead to a better museum experience."
    },
    {
      name: "Sondam Rhythm Game",
      pictures: [
        {
          img: require("./src/assets/portfolio/sondamgame/1.png")
        },
        {
          img: require("./src/assets/portfolio/sondamgame/compare.png")
        },
        {
          img: require("./src/assets/portfolio/sondamgame/results.png")
        },
        {
          demo: require("./src/assets/portfolio/sondamgame/demo.mp4")
        }
      ],
      technologies: ["HCI", "Children with IDD", "Manual sign learning", "Gamification", "Rhythm game"],
      category: "HCI",
      date: "Mar. 2020 - Aug. 2021",
      // github: "",
      visit: "",
      description:
        "Manual sign systems have been introduced to improve the communication of children with intellectual developmental disabilities (IDD). Due to the lack of learning support tools, teachers face many practical challenges in teaching manual sign to children, such as low attention span and the need for persistent intervention. To address these issues, we collaborated with teachers to develop the Sondam Rhythm Game, a gesture-based rhythm game that assists in teaching manual sign language, and ran a four-week empirical study with five teachers and eight children with IDD. Based on video annotation and post-hoc interviews, our game-based learning approach has the potential to be effective at teaching manual sign to children with IDD. Our approach improved children attention span and motivation while also increasing the number of voluntary gestures made without the need for prompting. Other practical issues and learning challenges were also uncovered to improve teaching paradigms for children with IDD."
    },
    {
      name: "Immersion in Your Eyes",
      pictures: [
        {
          img: require("./src/assets/portfolio/immersion/immersion.png")
        }
      ],
      technologies: [
        'Immersion', 'Machine learning', 'Objective measurement', 'Gaze behavior', 'Video watching'
      ],
      category: "HCI + AI",
      date: "Mar. 2020 - Oct. 2020",
      visit: "",
      description:
        "Immersion plays a crucial role in video watching, leading viewers to a positive experience, such as increased engagement and decreased fatigue. However, few studies measure immersion while watching videos, and questionnaires are typically used in the measurement of immersion for other applications. These methods may rely on the viewer’s memory and cause biased res ults. Therefore, we propose an objective immersion detection model by leveraging people’s gaze behavior while watching videos. In a lab study with 30 participants, a n in depth analysis is carried out on a number of gaze features and machine learning (ML) m odels to identify the immersion state. Several gaze features are highly indicative of immersion and ML models with these features are able to detect an immersion state of video watchers. Post hoc interviews demonstrate that our approach is applicable to me asure immersion in the middle of watching a video, where some practical issues are discussed as well."
    },
    {
      name: "TO BE CONTINUED..",
      pictures: [
      ],
    
    },
    
  ],
  portfolio_design: [
   
    
  ],
  publications: [
    {
      "international": [{
      title:
        "We Play and Learn Rhythmically: Gesture-based Rhythm Game for Children with Intellectual Developmental Disabilities to Learn Manual Sign",
      author_before: "Youjin Choi & ",
      author_me: "JooYeong Kim",
      author_after: ", ChanWoo Park, JeongYoun Kim, Ji Hyun Yi, Jin-Hyuk hong",
      position: "ACM CHI 2022 (Full Paper)",
      }
      ]
    },
    {
      "domestics":[
      {
        title:
          "Understanding of Ceramic Image Classification based on Deep Learning",
        author_before: "DaeHo Lee, In-Taek Jung, JunDoo Choi, ",
        author_me: "JooYeong Kim",
        author_after: ", JuYeon Kim, Jin-Hyuk Hong",
        position: "Korea Software Congress (KSC) 2021",
      },
      {
        title:
          "Gesture-based Rhythm Game for Learning Sign Language of Children with Severe Developmental Disabilities",
        author_before: "",
        author_me: "JooYeong Kim",
        author_after: ", Youjin Choi, In-Taek Jung, JiHyun Yi, Jeongyeon Kim, Jin-Hyuk Hong",
        position: "Korea Society for Augmentative and Alternative Communication (KSAAC) 2020",
      },
      {
        title:
          "Communication Education System Based on Gesture Recognition for Children with Severe Developmental Disabilities",
        author_before: "Intaek Jung, Youjin Choi, ",
        author_me: "JooYeong Kim",
        author_after: ", Jeongyoun Kim, Jin-Hyuk Hong",
        position: "Korea Software Congress (KSC) 2020",
      },
      {
        title:
          "A Comparative Study on the Performance of Speech Recognition for a Speech Interface in a Filming Environment",
        author_before: "Sanghun Jeon, Youjin Choi, ",
        author_me: "JooYeong Kim",
        author_after: ", Albert Deokyoung Yang, Mun Sang Kim, Jin-Hyuk Hong",
        position: "Korea Computer Congress (KCC) 2019",
      }]
    }
  ]
};

export default info;
