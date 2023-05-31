import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import { createTheme, Stack, ThemeProvider } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { fetchData } from './api/fetchDogs';
import LoadingButton from '@mui/lab/LoadingButton';




function App() {
  const isDarkMode = useSelector((state) => state.darkMode);

  const [modalOpen, setModalOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);


  const dispatch = useDispatch();
  const { rows, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
    document.body.style.overflowY = 'hidden';

  };
  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
    document.body.style.overflow = 'auto';

  };

  



  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 380,
      headerClassName: 'name-header',
      cellClassName: 'name-cell',
    },
    {
      field: 'life_span',
      headerName: 'Life Cycle',
      width: 380,
      headerClassName: 'life-span-header',
      cellClassName: 'life-span-cell',
    },
    {
      field: 'temperament',
      headerName: 'temperament',
      width: 380,
      headerClassName: 'temperament-header',
      cellClassName: 'temperament-cell',
    },
    {
      field: 'image',
      headerName: 'Photo',
      width: 380,
      headerClassName: 'image-header',
      cellClassName: 'image-cell',
      renderCell: (params) => (
        <div onClick={() => handleImageClick(params.value.url)}>
      <img
        src={params.value.url}
        alt="Dog"
        style={{ width: 380, height: 250, objectFit: 'cover', cursor: 'pointer' }}
      />
    </div>
      ),
    },
  ];


  if (status === 'loading') {
    <Stack direction="row" spacing={2}>
  
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" , width :'100%' }}>
  <LoadingButton     style={{ width: "200px", height: "60px", fontSize: 62, border: 'none' }}
 loading variant="outlined">
    Submit
  </LoadingButton>
</div>

  </Stack>

  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;

    
  }



  const theme = createTheme({
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? '#333' : '#FFF',
            color: isDarkMode ? '#FFF' : '#000',
            
          },
        },
      },
    },
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });
  

  return (


    <div className="App">
          <Header/>
    <ThemeProvider theme={theme}>
    <DataGrid rows={rows} columns={columns} pageSize={5}                 />

    </ThemeProvider>
    {modalOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}> Х</span>
          <img src={selectedImage} alt="Dog" className="modal-image" />
        </div>
      </div>
    )}
    </div>
  );
}

export default App;
