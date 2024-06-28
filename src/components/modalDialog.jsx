// ModalDialog.js
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
  ModalCloseButton,
  Box,
  useDisclosure,
} from "@chakra-ui/react";

const ModalDialog = ({ children, openButton, onClose }) => {
  const { isOpen, onOpen, onClose: internalOnClose } = useDisclosure();
  const handleClose = onClose || internalOnClose;

  const customOverlay = (
    <ModalOverlay bg='rgba(0, 0, 0, 0.75)' backdropFilter='blur(10px)' />
  );

  return (
    <>
      <Box onClick={onOpen}>{openButton}</Box>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        motionPreset='scale'
        size='xl'
        isCentered>
        {customOverlay}
        <ModalContent maxW="container.xl" height="260px">
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
            p="20px"
          >
            {React.cloneElement(children, { onClose: handleClose })}
          </Flex>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDialog;
