import styles from "../scss/pages/developers.module.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Developers = () => {
  const mockDevs = [
    {
      name: "Andrea",
      image:
        "https://media.licdn.com/dms/image/D4D03AQHIoiQppbkVkg/profile-displayphoto-shrink_800_800/0/1681079315184?e=1687392000&v=beta&t=eJeONXgcEV1MMi7OwBpNn1tU1ITox2KLjlN-yaEjqyk",
      linkedin: "https://www.linkedin.com/in/andrea-cosentino-38aa99151/",
      github: "https://github.com/Andrews46",
    },
    {
      name: "Claudio",
      image:
        "https://media.licdn.com/dms/image/D4D03AQGUHnbie11n2Q/profile-displayphoto-shrink_800_800/0/1681736329237?e=1687392000&v=beta&t=3DNql3PjPnZtOcX9L8CTCJg2d7vlw9_lhpC6hOp0rrI",
      linkedin: "https://www.linkedin.com/in/claudio-loreto-528193258/",
      github: "https://github.com/Clod91",
    },
    {
      name: "Ettore",
      image:
        "https://media.licdn.com/dms/image/D4D03AQEh7flqdr36aw/profile-displayphoto-shrink_800_800/0/1668436755969?e=1687392000&v=beta&t=VjeYENfx70qiVeoImtzyEVYWgOPlsuWZhMbwhRES56c",
      linkedin: "https://www.linkedin.com/in/ettore-sanfilippo//",
      github: "https://github.com/ShecktorS",
    },
    {
      name: "Filippo",
      image:
        "https://media.licdn.com/dms/image/D4E03AQEhh-1tnOni6g/profile-displayphoto-shrink_200_200/0/1681749633853?e=1687392000&v=beta&t=ry-eOTYIz-loaQXOc8SdOpfrMNXzmszSXfPUahcnaUY",
      linkedin: "https://www.linkedin.com/in/vangelistafilippo/",
      github: "https://github.com/FVangelista",
    },
    {
      name: "Francesca",
      image:
        "https://media.licdn.com/dms/image/D4D03AQFtCHNkMIbf9A/profile-displayphoto-shrink_200_200/0/1681822998215?e=1687392000&v=beta&t=ABack6f26Dc7_4EXLWVMyfYcDQxkM1qupRFQeG3DjYU",
      linkedin: "https://www.linkedin.com/in/francesca-pierini/",
      github: "https://github.com/pieradellafrancesca",
    },
    {
      name: "Zakaria",
      image: "https://avatars.githubusercontent.com/u/121048461?v=4",
      linkedin: "#",
      github: "https://github.com/ziko2001",
    },
  ];

  return (
    <div className={styles.Developers}>
      <div className={styles.info}>
        <h2>About</h2>
        <p>
          The project was made with the intent to simulate a cinema application,
          through it the user are able to create an account, login and through
          our searching system the user can chose desired movie of the moment
          and with matter of a click enter the reservation page and buy the
          cinema ticket . By doing so each user will have access to the tickets
          page where we are able to go and check for the tickets they've bought.
        </p>
      </div>
      <div className={styles.wrapper}>
        {mockDevs.map(({ name, image, linkedin, github }, i) => {
          return (
            <div className={styles.container} key={i}>
              <div className={styles.containerImage}>
                <img className={styles.image} src={image} alt="foto" />
              </div>

              <div className={styles.devData}>
                <h4>{name}</h4>
                <div className={styles.icons}>
                  <a href={linkedin} target="blank">
                    <BsLinkedin />
                  </a>
                  <a href={github} target="blank">
                    <BsGithub />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Developers;
