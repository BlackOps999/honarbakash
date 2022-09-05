import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EditPublication = ({publication, publicationState, setPublicationsState}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [article, setArticle] = React.useState(publication.article);
  const [publications, setPublications] = React.useState(publicationState);

  const updateArticle = async e => {
    e.preventDefault();
    try {
        const body = {article};
        const response = await fetch(
            `/api-updatepublication/${publication.pub_id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }
        );

        updateState();
 
        //console.log(response);
        //window.location = "/Publications";
    } catch (err) {
        console.error(err.message);
    }

  }

  const updateState = () => {
    const newState = publications.map(obj => {
      if (obj.pub_id === publication.pub_id)
      {
          //console.log(publication.pub_id)
          return {...obj, article: article}
      }
      return obj;
    });
    //console.log(newState);
    setArticle(article);
    setPublicationsState(newState);
    handleClose();
  };

  // console.log(article);

  return (
    <div>
      <Button onClick={handleOpen} data-target={`#id${publication.pub_id}`}>Edit</Button>
      <Modal
        open={open}
        onClose={() => {setArticle(publication.article); handleClose();}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id={`id${publication.pub_id}`} onClick={() => setArticle(publication.article)}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Publication
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'span'}>
            <div className="modal-body">
                <input type="text" className="form-control" value={article} onChange={e => setArticle(e.target.value)} />
            </div>
            <div className="modal-footer">
                <button type='button' onClick={e => updateArticle(e)}>Save</button>
                <button type='button' onClick={() => {setArticle(publication.article); handleClose();}}>Close</button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default EditPublication;
