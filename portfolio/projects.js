const projects = [
  {
    "id": "tolk",
    "da": [
      "TolkCare",
      "Android · Sundhedsteknologi",
      "Tolkning",
      "ANDROID APP",
      "Booking af tolke til samtaler i sundhedsvæsenet.",
      "Jeg byggede notifikationer med Firebase Cloud Messaging, bookingflowet i Firestore og videoopkald med Agora SDK. Det omfattede kanaler og opkaldsinvitationer. Jeg bidrog også til brugerfladen i Jetpack Compose og testede, at booking, beskeder og opkald fungerede sammen.",
      "Kotlin · Jetpack Compose · Firebase · Agora RTC"
    ],
    "en": [
      "TolkCare",
      "Android · Health technology",
      "Interpreting",
      "ANDROID APP",
      "Booking interpreters for healthcare appointments.",
      "I built notifications with Firebase Cloud Messaging, the booking flow in Firestore and video calling with Agora SDK, including channels and call invitations. I also contributed to the Jetpack Compose interface and tested how booking, messaging and calls worked together.",
      "Kotlin · Jetpack Compose · Firebase · Agora RTC"
    ],
    "github": "https://github.com/helanosman2018-hash/tolkcareapp",
    "video": "https://youtu.be/83v2FE1zai0"
  },
  {
    "id": "smart",
    "da": [
      "Smart Waste",
      "IoT · Mobiludvikling",
      "Smart Waste",
      "CONNECTED SYSTEM",
      "Fra fyldningsgrad i affaldsbeholdere til en rute i en app.",
      "Jeg udviklede Android-appen og brugte Eclipse Paho til at modtage målinger fra EMQX via MQTT. På et Google Maps-kort kunne brugeren se beholdernes placering og fyldningsgrad. Jeg integrerede Firestore til lagring af målinger, fejlsøgte forbindelsen og testede hele forløbet.",
      "C# · MQTTnet · EMQX · Docker · Android"
    ],
    "en": [
      "Smart Waste",
      "IoT · Mobile development",
      "Smart Waste",
      "CONNECTED SYSTEM",
      "From bin fill levels to collection routes in an Android app.",
      "I developed the Android app and used Eclipse Paho to receive measurements from EMQX over MQTT. A Google Maps view showed bin locations and fill levels. I integrated Firestore to store readings, debugged the connection and tested the system end to end.",
      "C# · MQTTnet · EMQX · Docker · Android"
    ],
    "github": "https://github.com/helanosman2018-hash/smart-waste-iot",
    "video": "https://youtu.be/5vvruHKEwWw"
  },
  {
    "id": "night",
    "da": [
      "Fodgængere om natten",
      "Computer vision · Deep learning",
      "Night vision",
      "BDD100K",
      "Detektion af fodgængere i trafikbilleder efter mørkets frembrud.",
      "I vores deep learning-projekt undersøger vi, hvordan træningsdata fra dag og nat påvirker detektionen af fodgængere. Vi bruger BDD100K, sorterer billederne efter tidspunkt på døgnet og arbejder med Faster R-CNN i PyTorch.",
      "Python · PyTorch · Faster R-CNN · BDD100K"
    ],
    "en": [
      "Pedestrian detection at night",
      "Computer vision · Deep learning",
      "Night vision",
      "BDD100K",
      "Detecting pedestrians in road scenes after dark.",
      "Our deep learning project explores how daytime and nighttime training data affect pedestrian detection. We group BDD100K images by time of day and train Faster R-CNN models in PyTorch.",
      "Python · PyTorch · Faster R-CNN · BDD100K"
    ],
    "github": "https://github.com/helanosman2018-hash/night-pedestrian-detection",
    "video": null
  },
  {
    "id": "graphics",
    "da": [
      "Graphics DSL",
      "Programmeringssprog · Grafik",
      "DRAW (x, y)",
      "GRAPHICS DSL",
      "Et lille sprog til at tegne figurer og diagrammer.",
      "En parser fortolker kommandoer til blandt andet linjer, cirkler, tekst og diagrammer. Resultatet vises i en Swing-viewer. Projektet samler sprogets syntaks og klassiske grafikalgoritmer som Bresenhams linjealgoritme og Cohen–Sutherland-klipning.",
      "Scala · Java · Swing · Logika"
    ],
    "en": [
      "Graphics DSL",
      "Programming languages · Graphics",
      "DRAW (x, y)",
      "GRAPHICS DSL",
      "A small language for drawing shapes and charts.",
      "A parser interprets commands for lines, circles, text and charts. A Swing viewer displays the results. The project combines language design with graphics algorithms including Bresenham’s line algorithm and Cohen–Sutherland clipping.",
      "Scala · Java · Swing · Logika"
    ],
    "github": "https://github.com/helanosman2018-hash/graphics-dsl",
    "video": null
  },
  {
    "id": "pulse",
    "da": [
      "Pulsmåler til Åstrands test",
      "Sundhedsteknologi · Signalbehandling",
      "Pulsmåler",
      "ÅSTRANDS TEST",
      "Pulsmåling med en optisk fingerklemme under en konditest.",
      "Jeg skrev C#-softwaren, der behandler signalet og beregner pulsen. Vores prototype kombinerede en 3D-printet fingerklemme med lysdioder, en Raspberry Pi og et display. Jeg udviklede også testprocedurer til at validere målingerne. Jeg var også med til at integrere hardwaren og fejlfinde systemet.",
      "C# · Raspberry Pi · Signalbehandling"
    ],
    "en": [
      "Heart rate monitor for the Åstrand test",
      "Health technology · Signal processing",
      "Heart rate",
      "ÅSTRAND TEST",
      "Measuring heart rate with an optical finger clip during a fitness test.",
      "I wrote the C# software for signal processing, heart rate calculation and data handling. Our prototype used a 3D-printed finger clip with LEDs, a Raspberry Pi and a display. I developed validation procedures and helped integrate and troubleshoot the hardware.",
      "C# · Raspberry Pi · Signal processing"
    ],
    "github": "https://github.com/helanosman2018-hash/astrand-heart-rate-monitor",
    "video": null
  },
  {
    "id": "ecg",
    "da": [
      "Telemedicinsk EKG-måler",
      "Telemedicin · Embedded software",
      "EKG",
      "SIGNALOPSAMLING",
      "Registrering af hjerterytme på plejehjem til efterfølgende vurdering på hospitalet.",
      "Jeg udviklede Raspberry Pi-applikationen til vores prototype. Den opsamlede og lagrede EKG-signalet i realtid og lod plejepersonalet betjene systemet med en drejeknap og et display. En separat WPF-applikation viste signalet til analyse. Jeg bidrog til kravspecifikationen og beskrev systemarkitekturen.",
      "C# · Raspberry Pi"
    ],
    "en": [
      "Telemedicine ECG recorder",
      "Telemedicine · Embedded software",
      "ECG",
      "SIGNAL ACQUISITION",
      "Recording heart rhythms in care homes for review at the hospital.",
      "I developed the Raspberry Pi application for real-time ECG acquisition, storage and control through a rotary encoder and display. A separate WPF application displayed the signal for analysis. I also contributed to the requirements specification and documented the system architecture.",
      "C# · Raspberry Pi"
    ],
    "github": "https://github.com/helanosman2018-hash/telemedicine-ecg",
    "video": "https://youtu.be/LPW3E9Af504"
  },
  {
    "id": "pressure",
    "da": [
      "Invasiv blodtryksmåler",
      "Sundhedsteknologi · Desktop",
      "Blodtryk",
      "REALTIDSDATA",
      "Et studieprojekt om løbende visualisering af blodtryk under operationer.",
      "Jeg udviklede WPF-applikationen til vores prototype med tryktransducer og Raspberry Pi. Applikationen viste en graf i realtid og understøttede login, kalibrering og alarmer ved afvigende værdier. Raspberry Pi-enheden behandlede signalet fra tryktransduceren og sendte data til pc’en. Jeg testede og fejlsøgte visningen og alarmerne.",
      "C# · WPF · Datavisualisering"
    ],
    "en": [
      "Invasive blood pressure monitor",
      "Health technology · Desktop",
      "Blood pressure",
      "REAL-TIME DATA",
      "A student prototype for visualising blood pressure during surgery.",
      "A Raspberry Pi processed the signal from a pressure transducer and sent the measurements to a PC. I built the WPF application with live graphs, login, calibration and alarms for abnormal readings. I also tested and debugged the interface and alerts.",
      "C# · WPF · Data visualisation"
    ],
    "github": "https://github.com/helanosman2018-hash/invasive-blood-pressure-monitor",
    "video": "https://youtu.be/CTa0iickyx0"
  },
  {
    "id": "vr",
    "da": [
      "VR til behandling af angst",
      "Virtual reality · Sundhedsteknologi",
      "360°",
      "VIRTUAL REALITY",
      "Eksponeringsvideoer af sociale situationer i et VR-miljø.",
      "Jeg planlagde og optog 360-graders scenerne, instruerede de medvirkende og satte kameraerne op. Jeg udviklede også brugerfladekomponenter og testede WPF-applikationen, som psykologen kunne bruge til at følge forløbet. Scenerne havde forskellige eksponeringsniveauer, og jeg bidrog til evalueringen af videomaterialet.",
      "VR · 360°-video · WPF"
    ],
    "en": [
      "VR for social anxiety",
      "Virtual reality · Health technology",
      "360°",
      "VIRTUAL REALITY",
      "Exposure videos of social situations in a virtual environment.",
      "I planned and filmed 360-degree scenes with different exposure levels, directed participants and set up the cameras. I helped evaluate the videos and developed and tested interface components for the psychologist’s WPF application.",
      "VR · 360°-video · WPF"
    ],
    "github": "https://github.com/helanosman2018-hash/vr-social-anxiety",
    "video": null
  },
  {
    "id": "model-management",
    "da": [
      "Model Management System",
      "Webudvikling · Frontend",
      "Model Management",
      "REACT APP",
      "En webapp til et modelbureau, hvor managere fordeler jobs, og modeller registrerer udgifter.",
      "I vores gruppe udviklede vi en React-app med to roller. En manager kan oprette modeller, managere og jobs samt tilføje eller fjerne modeller fra et job. En model kan se sine egne jobs og registrere udgifter. Appen kommunikerer med bureauets API og bruger et JWT-token efter login.",
      "React · JavaScript · REST API · JWT"
    ],
    "en": [
      "Model Management System",
      "Web development · Frontend",
      "Model Management",
      "REACT APP",
      "A model agency web app where managers assign jobs and models record expenses.",
      "Our team built a React app with two roles. Managers can create models, managers and jobs, and add or remove models from a job. Models can see their own assignments and submit expenses. The app communicates with the agency API and uses a JWT after login.",
      "React · JavaScript · REST API · JWT"
    ],
    "github": "https://github.com/helanosman2018-hash/model-management-system",
    "video": "https://youtu.be/Sxojf8_JCac"
  }
];
