import Home from '../pages/Home';
import Survey from '../pages/Survey';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
    const allQuestions = [
        {
            'type': 'radio',
            'question': 'What is your favorite color?',
            'answers' : [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ]
        },
        {
            'type': 'check',
            'question': 'Check Box Question!',
            'answers' : [
                'answer5',
                'answer6',
                'answer7',
                'answer8'
            ]
        },
        {
            'type': 'slider',
            'question': 'Slider Question!',
            'name': 'fart'
        }
    ];

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey" element={<Survey questions={allQuestions}/>} />
            </Routes>
        </Router>
    );
}

export default App;
