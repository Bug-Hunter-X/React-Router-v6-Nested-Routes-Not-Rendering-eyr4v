```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route is causing the issue */}
        <Route path="/contact" element={<Contact />} >
          <Route path="form" element={<ContactForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {return <div>Home</div>}
function About() {return <div>About</div>}
function Contact() {return <div>Contact</div>}
function ContactForm() {return <div>Contact Form</div>}
```