import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";


function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form style={{backgroundColor: "#340293"}} className="infoForm">
        <h3 style={{color: 'gold'}}>Your information</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          />

          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksIn"
            placeholder="Works in"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="nativeLanguage"
            placeholder="Native Language"
          />

          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="studiesAt"
            placeholder="Studies At"
           />
        </div>


        <div style={{color: 'wheat'}}>
            Profile Image 
            <input type="file" style={{color:'wheat'}} name='profileImg'/>
            Cover Image
            <input type="file" name="coverImg" />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
