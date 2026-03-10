let info = {
  name: "JooYeong Kim",
  logo_name: "JooYeong",
  flat_picture: require("./src/assets/profile.jpeg"),
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
  portfolio: {
    arxiv: [
      { 
        featured: true,
        name: "Beyond Virtual Trainers: Exploring Humanoid Robots for Interactive Home Workouts with Multimodal Feedback",
        authors: "JunDoo Choi*, JooYeong Kim*, Jongyun Woo, Mugeon Song, Jiyeon Ryu, Pulkit Agrawal, Jin-Hyuk Hong (*contributed equally)",
        journal: "Under Review",
        pictures: [
          {
            img: require("./src/assets/portfolio/humanoid/humanoid.png")
          }
        ],
        technologies: [
          'Human-Robot Interaction', 'Home fitness', 'Humanoid robots', 'Multimodal feedback'
        ],
        category: "HRI",
        date: "Mar. 2025 – Opt. 2025",
        visit: "",
        description:
          "Home workouts have surged in popularity, yet the absence of personal trainers often leads to poor posture, reduced motivation, and injury risks. Humanoid robots, as an emerging technology, present a unique opportunity to reimagine coaching at home. This paper explores how humanoid robots can support safe and engaging home workouts. Through formative interviews with eight home fitness users and four professional trainers, we identified challenges in home fitness and posture correction strategies. Building on these insights, we implemented a humanoid-based multimodal feedback system that integrates pose estimation, LLM-powered guidance planning, and robot control. A user study with 24 participants demonstrated the feasibility of humanoid robots as home fitness companions. Results showed that the proposed system delivered personalized posture feedback and enhanced motivation by making workouts more interactive. These findings point to design implications for developing humanoid robots as supportive companions, highlighting future directions for human–robot interaction in everyday fitness."
      },
    ],
    international: [
      { 
        featured: true,
        name: "Voice-Visualized Message Interactions on Smartwatches",
        authors: "JooYeong Kim, Sooyeon Ahn, Yoonjae Kim, Jin-Hyuk Hong",
        journal: "International Journal of Human-Computer Interaction (JCR Q1)",
        paper_link: "https://doi.org/10.1080/10447318.2026.2643343",
        pictures: [
          {
            img: require("./src/assets/portfolio/vovi/common_vovi.png")
          }
        ],
        technologies: [
          'Voice Messaging', 'Voice Visualization', 'Smartwatch'
        ],
        category: "HCI",
        date: "May. 2024 – Sep. 2024",
        visit: "",
        description:
          "Voice messages have surged as an effective communication medium, offering convenience and rich paralinguistic cues. However, their reliance on audio playback often restricts message review in various situations. While transcriptions and teasers are helpful, they still require users to find a private place to listen to the audio. To address this limitation, we present VOVI, a voice-visualized messaging system that enables comprehensive message review in environments where audio playback is impractical. Building on careful design rationales, we integrate visualization features into a smartwatch-based voice messaging interface. The system automatically detects speech nuances and proposes customizable visualized transcriptions. A user study with 10 pairs of participants demonstrated that VOVI's transcriptions effectively capture speech content and paralinguistic cues, allowing senders to effortlessly express nuances and receivers to intuitively understand them without audio. Our findings suggest that voice visualization significantly enhances voice message interactions and offer insights for designing future voice messaging systems."
      },
      {
        featured: true,
        name: "CuCap: Comparative Analysis of Customized Captioning between North American and South Korean d/Deaf and Hard-of-Hearing Users",
        authors: "Calua de Lacerda Pataca*, SooYeon Ahn*, Suhyeon Yoo*, JooYeong Kim, Khai N. Truong, Jin-Hyuk Hong, Roshan L Peiris, Matt Huenerfauth",
        journal: "ASSETS '25: Proceedings of the 27th International ACM SIGACCESS Conference on Computers and Accessibility",
        paper_link: "https://dl.acm.org/doi/10.1145/3663547.3746400",
        pictures: [
          {
            img: require("./src/assets/portfolio/cucap/codesign.png")
          }
        ],
        technologies: [
          'Captioning', 'Accessibility', 'Cross-cultural', 'Deaf/Hard-of-Hearing'
        ],
        category: "HCI",
        date: "2025",
        visit: "",
        description: "Affective and prosodic captions convey not only what a speaker says, but also how they say it—louder words may appear thicker, quieter ones thinner; angry in red, calm in blue. These captions can improve access, satisfaction, and engagement for d/Deaf and Hard-of-Hearing (dhh) users. While prior work has explored their design space, it has focused largely on dhh participants in North America, limiting generalizability beyond English and Latin-based scripts. To uncover the role of culture and language, we ran an ex- ploratory study with 49 dhh participants from North America and South Korea using CuCap, a tool that allowed them to personalize which speech features were displayed, and how. While emotion visualization was a universally favored choice, confirming prior findings, prosody preferences varied across cultures, reflecting lin- guistic and hearing factors. These findings point to the need for flexible captioning systems that account for cultural, linguistic, and individual differences."
      },
      {
        featured: true,
        name: "Pre-AttentiveGaze: gaze-based authentication dataset with momentary visual interactions",
        authors: "Junryeol Jeon, Yeo-Gyeong Noh, JooYeong Kim, Jin-Hyuk Hong",
        journal: "Scientific Data",
        paper_link: "https://doi.org/10.1038/s41597-025-04538-3",
        pictures: [
          {
            img: require("./src/assets/portfolio/preattentive/preattentivegaze.png")
          }
        ],
        technologies: [
          'Gaze-based Authentication', 'Dataset', 'Eye Tracking', 'Security'
        ],
        category: "HCI + AI",
        date: "2025",
        visit: "",
        description: "This manuscript presents a Pre-AttentiveGaze dataset. One of the defining characteristics of gaze-based authentication is the necessity for a rapid response. In this study, we constructed a dataset for identifying individuals through eye movements by inducing “pre-attentive processing” in response to a given gaze stimulus in a very short time. A total of 76,840 eye movement samples were collected from 34 participants across five sessions. From the dataset, we extracted the gaze features proposed in previous studies, pre-processed them, and validated the dataset by applying machine learning models. This study demonstrates the efficacy of the dataset and illustrates its potential for use in gaze-based authentication of visual stimuli that elicit pre-attentive processing."
      },
      {
        featured: true,
        name: "OnomaCap: Making Non-speech Sound Captions Accessible and Enjoyable through Onomatopoeic Sound Representation",
        authors: "JooYeong Kim, Jin-Hyuk Hong",
        journal: "CHI '25: Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems",
        paper_link: "https://doi.org/10.1145/3706598.3713911",
        dataset_link: "https://github.com/jspirit01/sound-to-onomatopoeia",
        pictures: [
          {
            img: require("./src/assets/portfolio/onomacap/example_annotated_generated.png"),
            img: require("./src/assets/portfolio/onomacap/study-outline.png")
          }
        ],
        technologies: [
          'Onomatopoeia', 'Non-speech Sound', 'Accessibility', 'Deaf/Hard-of-Hearing'
        ],
        category: "HCI",
        date: "Jan. 2023 – Sep. 2024",
        visit: "https://jspirit01.github.io/onomacap/",
        description:
          "Non-speech sounds play an important role in setting the mood of a video and aiding comprehension. However, current non-speech sound captioning practices focus primarily on sound categories, which fails to provide a rich sound experience for deaf and hard-of-hearing (DHH) viewers. Onomatopoeia, which succinctly captures expressive sound information, offers a potential solution but remains underutilized in non-speech sound captioning. This paper investigates how onomatopoeia benefits DHH audiences in non-speech sound captioning. We collected 7,962 sound-onomatopoeia pairs from listeners and developed a sound-onomatopoeia model that automatically transcribes sounds into onomatopoeic descriptions indistinguishable from human-generated ones. A user evaluation of 25 DHH participants using the model-generated onomatopoeia demonstrated that onomatopoeia significantly improved their video viewing experience. Participants most favored captions with onomatopoeia and category, and expressed a desire to see such captions across genres. We discuss the benefits and challenges of using onomatopoeia in non-speech sound captions, offering insights for future practices. "
      },
      {
        featured: true,
        name: "Visualizing Speech Styles in Captions for Deaf and Hard-of-Hearing Viewers",
        authors: "Sooyeon Ahn*, JooYeong Kim*, Choonsung Shin, Jin-Hyuk Hong (*contributed equally)",
        journal: "International Journal of Human-Computer Studies (JCR Q1)",
        paper_link: "https://doi.org/10.1016/j.ijhcs.2024.103386",
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
        description: "Speech styles such as extension, emphasis, and pause play an important role in capturing the audience’s attention and conveying a message impressively. Unfortunately, it is challenging for Deaf and Hard-of-Hearing (DHH) people to enjoy these benefits when watching lectures with common captions. In this paper, we propose a new caption system that automatically analyzes speech styles from audio and visualizes them using visualization elements such as punctuation, paint-on, color, and boldness. We conducted a comparative study with 26 DHH viewers and found that the proposed caption system enabled them to recognize the speaker’s speech style in lectures. As a result, the DHH viewers were able to watch lecture videos more vividly and were more engaged with the lectures. In particular, punctuation can be a practical solution to visualize speech styles and ensure legibility. Participants expressed a desire to use our caption system in their daily lives, providing valuable insights for future sound-visualized caption research."
      },
      {  
        featured: false,
        name: "Interactive Description to Enhance Accessibility and Experience of Deaf and Hard-of-Hearing Individuals in Museums",
        authors: "JooYeong Kim, ChungHa Lee, JuYeon Kim, Jin-Hyuk Hong",
        journal: "Universal Access in the Information Society",
        paper_link: "https://link.springer.com/epdf/10.1007/s10209-023-00983-2?sharing_token=OGtpplPiVV7CSdIpCHs75Pe4RwlQNchNByi7wbcMAY4x7a0OAnpvzHK6_58p_MYjIVK_I2mEQS0IYv-JzyEUpw3fGui49RakYfVrbNvXQNAqzdih-LvN6jS3ZnhfASwk0QCqVZ6igRxPMohCwVIXcghHKyLsJUcr21AsPjGeWF4%3D",
        pictures: [
          {
            img: require("./src/assets/portfolio/museum/fig1.png")
          }
        ],
        technologies: [
          'Museum Experience', 'Accessibility', 'Interactive Design', 'Deaf/Hard-of-Hearing'
        ],
        category: "HCI",
        date: "2023",
        visit: "",
        description: "Text descriptions in museums provide detailed and rich information about artifacts that broadens museum visitors’ knowledge and enriches their experience. However, since deaf and hard-of-hearing (DHH) individuals have low literacy compared to hearing people and communicate through sign language, museum descriptions are considerably limited in delivering a stimulating and informative environment for understanding and enjoying exhibits. To improve DHH individuals’ museum experience, we investigated the potential of three interactive description prototypes: active-linked, graph-based, and chatbot-based. A comparative study with 20 DHH participants confirmed that our interaction-based prototypes improve information accessibility and provide an enhanced experience compared to conventional museum descriptions. Most participants preferred the graph-based prototype, while post-interviews suggested that each prototype has potential benefits and limitations according to DHH individuals’ particular literacy skills and preferences. Text descriptions can be enlivened for DHH visitors by adding a simple interaction functionality, e.g., clicking, which can lead to a better museum experience."
      },
      {
        featured: true,
        name: "Visible Nuances: A Caption System to Visualize Paralinguistic Speech Cues for Deaf and Hard-of-Hearing Individuals",
        authors: "JooYeong Kim*, Sooyeon Ahn*, Jin-Hyuk Hong (*contributed equally)",
        journal: "CHI '23: Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems",
        paper_link: "https://dl.acm.org/doi/10.1145/3544548.3581130",
        video_link: "https://youtu.be/-DTB85q03Cc",
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
          "Captions help deaf and hard-of-hearing (DHH) individuals visually communicate voice information to better understand video content. In speech, the literal content and paralinguistic cues (e.g., pitch and nuance) work together to create real intention. However, current captions are limited in their capacity to deliver fine nuances because they cannot fully convey these paralinguistic cues. This paper proposes an audio-visualized caption system that automatically visualizes paralinguistic cues into various caption elements (thickness, height, font type and motion). A comparative study with 20 DHH participants demonstrates how our system supports DHH individuals to be better accessible to paralinguistic cues while watching videos. Particularly in the case of formal talks, they could accurately identify the speaker's nuance more often compared to current captions, without any practice or training. Addressing some issues on legibility and familiarity, the proposed caption system has potentials to enrich DHH individuals' video watching experience more as hearing people enjoy."
      },
      {
        featured: false,
        name: "Immersion Measurement in Watching Videos Using Eye-tracking Data",
        authors: "Youjin Choi*, JooYeong Kim*, Jin-Hyuk Hong (*contributed equally)",
        journal: "IEEE Transaction on Affective Computing (JCR Rank Top 5%)",
        paper_link: "https://doi.org/10.1109/TAFFC.2022.3209311",
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
          "Immersion plays a crucial role in video watching, leading viewers to a positive experience, such as increased engagement and decreased fatigue. However, few studies measure immersion while watching videos, and questionnaires are typically used in the measurement of immersion for other applications. These methods may rely on the viewer's memory and cause biased res ults. Therefore, we propose an objective immersion detection model by leveraging people's gaze behavior while watching videos. In a lab study with 30 participants, a n in depth analysis is carried out on a number of gaze features and machine learning (ML) m odels to identify the immersion state. Several gaze features are highly indicative of immersion and ML models with these features are able to detect an immersion state of video watchers. Post hoc interviews demonstrate that our approach is applicable to me asure immersion in the middle of watching a video, where some practical issues are discussed as well."
      },
      {
        featured: false,
        name: "We Play and Learn Rhythmically: Gesture-based Rhythm Game for Children with Intellectual Developmental Disabilities to Learn Manual Sign",
        authors: "Youjin Choi*, JooYeong Kim*, ChanWoo Park, JeongYoun Kim, Ji Hyun Yi, Jin-Hyuk Hong (*contributed equally)",
        journal: "CHI '22: Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems",
        paper_link: "https://dl.acm.org/doi/10.1145/3491102.3517456",
        pictures: [
          {
            img: require("./src/assets/portfolio/sondamgame/game_scene.png")
          },
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
        visit: "",
        description:
          "Manual sign systems have been introduced to improve the communication of children with intellectual developmental disabilities (IDD). Due to the lack of learning support tools, teachers face many practical challenges in teaching manual sign to children, such as low attention span and the need for persistent intervention. To address these issues, we collaborated with teachers to develop the Sondam Rhythm Game, a gesture-based rhythm game that assists in teaching manual sign language, and ran a four-week empirical study with five teachers and eight children with IDD. Based on video annotation and post-hoc interviews, our game-based learning approach has the potential to be effective at teaching manual sign to children with IDD. Our approach improved children attention span and motivation while also increasing the number of voluntary gestures made without the need for prompting. Other practical issues and learning challenges were also uncovered to improve teaching paradigms for children with IDD."
      }
    ],
    domestic: [
      {
        featured: false,
        name: "A Study of Non-speech Sound Recognition using Onomatopoeic Representations",
        authors: "JooYeong Kim, Jin-Hyuk Hong",
        journal: "Korea Software Congress (KSC) 2024",
        pictures: [
          {
            
          }
        ],
        technologies: [
          'Onomatopoeia', 'Sound Recognition', 'Non-speech Sound', 'Domestic Conference'
        ],
        category: "HCI + AI",
        date: "2024",
        visit: "",
        description: "Study on non-speech sound recognition using onomatopoeic representations for improved accessibility."
      },
      {
        featured: false,
        name: "A Study of Sound Balloon Generation System using Multimodal ChatGPT for Sound Accessibility",
        authors: "JooYeong Kim, Jin-Hyuk Hong",
        journal: "Korea Software Congress (KSC) 2024",
        pictures: [
          {
            
          }
        ],
        technologies: [
          'ChatGPT', 'Sound Accessibility', 'Multimodal AI', 'Sound Visualization'
        ],
        category: "HCI + AI",
        date: "2024",
        visit: "",
        description: "Sound balloon generation system leveraging multimodal ChatGPT for enhanced sound accessibility."
      },
      {
        featured: false,
        name: "Understanding of Ceramic Image Classification based on Deep Learning",
        authors: "DaeHo Lee, In-Taek Jung, JunDoo Choi, JooYeong Kim, JuYeon Kim, Jin-Hyuk Hong",
        journal: "Korea Software Congress (KSC) 2021",
        pictures: [
          {
            
          }
        ],
        technologies: [
          'Deep Learning', 'Image Classification', 'Ceramic Analysis', 'Computer Vision'
        ],
        category: "AI",
        date: "2021",
        visit: "",
        description: "Deep learning-based approach for ceramic image classification and understanding."
      },
      {
        featured: false,
        name: "Gesture-based Rhythm Game for Learning Sign Language of Children with Severe Developmental Disabilities",
        authors: "JooYeong Kim, Youjin Choi, In-Taek Jung, JiHyun Yi, Jeongyeon Kim, Jin-Hyuk Hong",
        journal: "Korea Society for Augmentative and Alternative Communication (KSAAC) 2020",
        pictures: [
          {
            
          }
        ],
        technologies: [
          'Sign Language Learning', 'Gesture Recognition', 'Children with Disabilities', 'Educational Game'
        ],
        category: "HCI",
        date: "2020",
        visit: "",
        description: "Educational rhythm game designed for children with severe developmental disabilities to learn sign language through gesture recognition."
      },
      {
        featured: false,
        name: "Communication Education System Based on Gesture Recognition for Children with Severe Developmental Disabilities",
        authors: "In-Taek Jung, Youjin Choi, JooYeong Kim, Jeongyoun Kim, Jin-Hyuk Hong",
        journal: "Korea Software Congress (KSC) 2020",
        pictures: [
          {
            
          }
        ],
        technologies: [
          'Communication Education', 'Gesture Recognition', 'Children with Disabilities', 'Educational System'
        ],
        category: "HCI",
        date: "2020",
        visit: "",
        description: "Communication education system using gesture recognition technology for children with severe developmental disabilities."
      },
      {
        featured: false,
        name: "A Comparative Study on the Performance of Speech Recognition for a Speech Interface in a Filming Environment",
        authors: "Sanghun Jeon, Youjin Choi, JooYeong Kim, Albert Deokyoung Yang, Mun Sang Kim, Jin-Hyuk Hong",
        journal: "Korea Computer Congress (KCC) 2019",
        pictures: [
          {
            
          }
        ],
        technologies: [
          'Speech Recognition', 'Speech Interface', 'Filming Environment', 'Performance Analysis'
        ],
        category: "AI",
        date: "2019",
        visit: "",
        description: "Comparative study analyzing speech recognition performance in various filming environments for speech interface applications."
      }
    ],
    projects: [
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

  ]
  },
  portfolio_design: [
   
    
  ],
  // publications: [
  //   {
  //     "international": [{
  //     title:
  //       "We Play and Learn Rhythmically: Gesture-based Rhythm Game for Children with Intellectual Developmental Disabilities to Learn Manual Sign",
  //     author_before: "Youjin Choi & ",
  //     author_me: "JooYeong Kim",
  //     author_after: ", ChanWoo Park, JeongYoun Kim, Ji Hyun Yi, Jin-Hyuk hong",
  //     position: "ACM CHI 2022 (Full Paper)",
  //     }
  //     ]
  //   },
  //   {
  //     "domestics":[
  //     {
  //       title:
  //         "Understanding of Ceramic Image Classification based on Deep Learning",
  //       author_before: "DaeHo Lee, In-Taek Jung, JunDoo Choi, ",
  //       author_me: "JooYeong Kim",
  //       author_after: ", JuYeon Kim, Jin-Hyuk Hong",
  //       position: "Korea Software Congress (KSC) 2021",
  //     },
  //     {
  //       title:
  //         "Gesture-based Rhythm Game for Learning Sign Language of Children with Severe Developmental Disabilities",
  //       author_before: "",
  //       author_me: "JooYeong Kim",
  //       author_after: ", Youjin Choi, In-Taek Jung, JiHyun Yi, Jeongyeon Kim, Jin-Hyuk Hong",
  //       position: "Korea Society for Augmentative and Alternative Communication (KSAAC) 2020",
  //     },
  //     {
  //       title:
  //         "Communication Education System Based on Gesture Recognition for Children with Severe Developmental Disabilities",
  //       author_before: "Intaek Jung, Youjin Choi, ",
  //       author_me: "JooYeong Kim",
  //       author_after: ", Jeongyoun Kim, Jin-Hyuk Hong",
  //       position: "Korea Software Congress (KSC) 2020",
  //     },
  //     {
  //       title:
  //         "A Comparative Study on the Performance of Speech Recognition for a Speech Interface in a Filming Environment",
  //       author_before: "Sanghun Jeon, Youjin Choi, ",
  //       author_me: "JooYeong Kim",
  //       author_after: ", Albert Deokyoung Yang, Mun Sang Kim, Jin-Hyuk Hong",
  //       position: "Korea Computer Congress (KCC) 2019",
  //     }]
  //   }
  // ]
};

export default info;
