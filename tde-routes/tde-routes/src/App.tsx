import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Toaster } from 'sonner';
import { People } from './pages/People';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/people',
		element: <People />,
	},
]);

function App() {
	return (
		<>
			<Toaster></Toaster>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
