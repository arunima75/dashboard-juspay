import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./layout/default";
import Home from "./components/Home/Home";
import OrderList from "./components/UI/Table/OrderList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; 

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: true ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Router>
      <Layout>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/default"  element={<Home/>} />
          <Route path="/eCommerce" element={<Home/>} />
          <Route path="/projects" element={<OrderList/>} />
        </Routes>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
