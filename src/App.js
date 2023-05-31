<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { fetchData } from './api/fetchDogs';
=======
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material';
>>>>>>> 9e54bb7b262fcd7685f3531e4dcddf0eb10b8422



function App() {
  const isDarkMode = useSelector((state) => state.darkMode);

<<<<<<< HEAD
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
      width: 400,
      headerClassName: 'name-header',
      cellClassName: 'name-cell',
    },
    {
      field: 'life_span',
      headerName: 'Life Cycle',
      width: 400,
      headerClassName: 'life-span-header',
      cellClassName: 'life-span-cell',
    },
    {
      field: 'temperament',
      headerName: 'temperament',
      width: 400,
      headerClassName: 'temperament-header',
      cellClassName: 'temperament-cell',
    },
    {
      field: 'image',
      headerName: 'Photo',
      width: 400,
      headerClassName: 'image-header',
      cellClassName: 'image-cell',
      renderCell: (params) => (
        <div onClick={() => handleImageClick(params.value.url)}>
      <img
        src={params.value.url}
        alt="Dog"
        style={{ width: 200, height: 300, objectFit: 'scale-down', cursor: 'pointer' }}
      />
    </div>
      ),
    },
  ];


  if (status === 'loading') {
    return <div>Loading...</div>;
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
  

=======
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    // Other theme configurations...
  });
>>>>>>> 9e54bb7b262fcd7685f3531e4dcddf0eb10b8422
  return (

    <div className="App">
          <Header/>
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
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
=======

    </ThemeProvider>
>>>>>>> 9e54bb7b262fcd7685f3531e4dcddf0eb10b8422
    </div>
  );
}

export default App;
