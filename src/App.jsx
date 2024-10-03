import { useEffect, useState } from 'react';
import Appbar from './components/Appbar'
import DataTable from "./components/DataTable"

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
  };
  return (
    <div id="container" className="max-w-[1440px] duration-300 h-[100vh] mx-auto shadow-2xl shadow-black flex flex-col justify-between">
      <Appbar setSearchTerm={setSearchTerm} setFilterStatus={setFilterStatus} theme={theme} onThemeChange={handleThemeChange} />
      <DataTable searchTerm={searchTerm} filterStatus={filterStatus} theme={theme} />
    </div>
  )
}

export default App