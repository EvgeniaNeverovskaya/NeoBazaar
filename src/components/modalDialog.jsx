import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Box,
  useDisclosure,
} from "@chakra-ui/react";

const ModalDialog = ({ children, openButton }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const customOverlay = (
    <ModalOverlay bg='rgba(0, 0, 0, 0.75)' backdropFilter='blur(10px)' />
  );

  return (
    <>
      <Box onClick={onOpen}>{openButton}</Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset='scale'
        size='xl'
        isCentered>
        {customOverlay}
        <ModalContent maxW="container.xl" height="260px">
          {children}
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDialog;
