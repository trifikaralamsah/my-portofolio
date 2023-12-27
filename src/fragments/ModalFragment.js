import React, { useState } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const ModalFragment = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [idModal, setIdModal] = useState("");
  let width = window.screen.availWidth;

  return (
    <React.Fragment>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true) & setIdModal(`${item.id}-${item.title}`)}
        open={open && idModal === `${item.id}-${item.title}`}
        trigger={
          <div className="border border-slate-300 rounded-lg hover:scale-105 h-[max-content]  py-3">
            <img
              src={item.image}
              alt={item.title}
              className="p-3 pb-1 cursor-pointer hover:scale-105 hover:z-10 hover:shadow-2xl hover:duration-75"
            ></img>
          </div>
        }
        key={`${item.id}-${item.title}`}
        dimmer="blurring"
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <div className="flex">
            <div>{item.title}</div>
            <div className="ml-auto">
              <Modal.Actions>
                <Button icon="close" onClick={() => setOpen(false)} negative />
              </Modal.Actions>
            </div>
          </div>
        </Modal.Header>
        <div className="flex flex-col md:flex-row p-10 pt-2">
          <div className="self-center border border-slate-400 rounded-xl">
            <Image
              size={width <= 500 ? "medium" : "extra large"}
              src={item.image}
              wrapped
            />
          </div>
          <div className="ml-7 mt-5 md:mt-0">
            <Header>{item.title}</Header>
            <p className="text-justify">{item.description}</p>
            <p className="font-bold font-gochi pt-8">Role : {item.position}</p>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ModalFragment;
