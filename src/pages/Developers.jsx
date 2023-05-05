import styles from "../scss/pages/developers.module.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Developers = () => {
  return (
    <div className={styles.Developers}>
      <h1>Project Description</h1>
      <p>Spiegazione del progetto</p>
      <div className={styles.container}>
        <div className={styles.containerImage}>
          <img
            className={styles.image}
            src="https://media.licdn.com/dms/image/D4D03AQHIoiQppbkVkg/profile-displayphoto-shrink_800_800/0/1681079315184?e=1687392000&v=beta&t=eJeONXgcEV1MMi7OwBpNn1tU1ITox2KLjlN-yaEjqyk"
            alt="foto"
          />
        </div>

        <div className={styles.prova}>
          <h4>Andrea</h4>
          <div className={styles.Icon}>
            <a href="https://github.com/Andrews46" target="blank">
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/andrea-cosentino-38aa99151/"
              target="blank"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerImage}>
          <img
            className={styles.image}
            src="https://media.licdn.com/dms/image/D4D03AQGUHnbie11n2Q/profile-displayphoto-shrink_800_800/0/1681736329237?e=1687392000&v=beta&t=3DNql3PjPnZtOcX9L8CTCJg2d7vlw9_lhpC6hOp0rrI"
            alt="foto"
          />
        </div>
        <div className={styles.prova}>
          <h4>Claudio</h4>
          <div className={styles.Icon}>
            <a href="https://github.com/Clod91" target="blank">
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/claudio-loreto-528193258/"
              target="blank"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerImage}>
          <img
            className={styles.image}
            src="https://media.licdn.com/dms/image/D4D03AQEh7flqdr36aw/profile-displayphoto-shrink_800_800/0/1668436755969?e=1687392000&v=beta&t=VjeYENfx70qiVeoImtzyEVYWgOPlsuWZhMbwhRES56c"
            alt="foto"
          />
        </div>
        <div className={styles.prova}>
          <h3>Ettore</h3>
          <div className={styles.Icon}>
            <a href="https://github.com/ShecktorS" target="blank">
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ettore-sanfilippo//"
              target="blank"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerImage}>
          <img
            className={styles.image}
            src="https://media.licdn.com/dms/image/D4E03AQEhh-1tnOni6g/profile-displayphoto-shrink_200_200/0/1681749633853?e=1687392000&v=beta&t=ry-eOTYIz-loaQXOc8SdOpfrMNXzmszSXfPUahcnaUY"
            alt="foto"
          />
        </div>
        <div className={styles.prova}>
          <h3>Filippo</h3>
          <div className={styles.Icon}>
            <a href="https://github.com/FVangelista" target="blank">
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vangelistafilippo/"
              target="blank"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.containerImage}>
          <img
            className={styles.image}
            src="https://media.licdn.com/dms/image/D4D03AQFtCHNkMIbf9A/profile-displayphoto-shrink_200_200/0/1681822998215?e=1687392000&v=beta&t=ABack6f26Dc7_4EXLWVMyfYcDQxkM1qupRFQeG3DjYU"
            alt="foto"
          />
        </div>
        <div className={styles.prova}>
          <h3>Francesca</h3>
          <div className={styles.Icon}>
            <a href="https://github.com/pieradellafrancesca" target="blank">
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/francesca-pierini/"
              target="blank"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerImage}>
          <img
            className={styles.image}
            src="https://avatars.githubusercontent.com/u/121048461?v=4"
            alt="foto"
          />
        </div>

        <div className={styles.prova}>
          <h3>Zakaria</h3>
          <div className={styles.Icon}>
            <a href="https://github.com/ziko2001" target="blank">
              <BsGithub />
            </a>
            <a href="" target="blank">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
