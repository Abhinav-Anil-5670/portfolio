import React from 'react';

const App = () => {
    
    const [history, setHistory] = React.useState([]);
    const [input, setInput] = React.useState('');
    const [currentPath, setCurrentPath] = React.useState('~');
    const terminalRef = React.useRef(null);
    const inputRef = React.useRef(null);

    React.useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const WelcomeMessage = () => (
        <div className="mb-4">
            <p className="text-lg">Welcome to my portfolio.</p>
            <p className="text-lg">&nbsp;</p>
            <p>I build intuitive and performant experiences for the web.</p>
            <p>Get started by typing `help` to see what you can do.</p>
            <p>&nbsp;</p>
        </div>
    );

    const helpContent = () => (
        <div className="text-white">
            <p className="mb-2 font-bold">Available Commands:</p>
            <ul className="list-disc list-inside space-y-1">
                <li><span className="font-semibold text-green-400">cd about</span>    - Display my professional summary.</li>
                <li><span className="font-semibold text-green-400">cd skills</span>   - List my technical skills.</li>
                <li><span className="font-semibold text-green-400">cd projects</span> - Show my recent projects.</li>
                <li><span className="font-semibold text-green-400">cd contact</span>  - Show my contact information.</li>
                <li><span className="font-semibold text-green-400">clear</span>    - Clear the command history.</li>
                <li><span className="font-semibold text-green-400">help</span>     - Display this help message.</li>
            </ul>
        </div>
    );

    const aboutContent = () => (
        <div className="text-white">
            <h2 className="text-xl font-bold text-green-400 mb-2">About Me</h2>
            <p>
                I'm Abhinav Anil, a third-year Computer Science student and a passionate MERN Stack Developer. I thrive on building robust, scalable, and intuitive web applications from the ground up. My expertise spans across designing dynamic frontends with React and building secure, high-performance backend APIs with Node.js, Express, and MongoDB. I'm constantly exploring new technologies, including integrating AI models, to architect solutions that solve real-world problems.
            </p>
        </div>
    );

    const skillsContent = () => (
        <div className="text-white">
            <h2 className="text-xl font-bold text-green-400 mb-2">Technical Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div>
                    <h3 className="font-semibold mb-1">Languages</h3>
                    <ul className="list-disc list-inside text-sm text-gray-300">
                        <li>JavaScript (ES6+)</li>
                        <li>HTML5 & CSS3</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">Frontend</h3>
                    <ul className="list-disc list-inside text-sm text-gray-300">
                        <li>React.js & Vite</li>
                        <li>Tailwind CSS & SCSS</li>
                        <li>TensorFlow.js</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">Backend & DB</h3>
                    <ul className="list-disc list-inside text-sm text-gray-300">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB & Mongoose</li>
                        <li>RESTful APIs & JWT</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">Tools & Services</h3>
                    <ul className="list-disc list-inside text-sm text-gray-300">
                        <li>Git & GitHub</li>
                        <li>ImageKit CDN</li>
                        <li>Google Gemini API</li>
                        <li>Swagger UI</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    const projectsContent = () => (
        <div className="text-white">
            <h2 className="text-xl font-bold text-green-400 mb-2">Projects</h2>
            <div className="space-y-6">
                
                <div>
                    <h3 className="font-semibold text-green-400 hover:text-white">
                        <a href="https://github.com/Abhinav-Anil-5670/cinevault" target="_blank" rel="noreferrer">Project One: CineVault (Frontend)</a>
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">A responsive web application that provides detailed information about movies, TV shows, and celebrities, powered by the TMDb API.</p>
                    <p className="text-gray-300 text-sm mt-1">Browse trending and popular titles, filter results, view details, and watch trailers. Includes a global search and external links to IMDb, social media, and official websites.</p>
                </div>

                <div>
                    <h3 className="font-semibold text-green-400 hover:text-white">
                        <a href="https://github.com/Abhinav-Anil-5670/Task-Manager" target="_blank" rel="noreferrer">Project Two: Task Manager API (Backend)</a>
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">A full-featured RESTful API designed for a MERN project, built with Node.js, Express, MongoDB, and Mongoose.</p>
                    <p className="text-gray-300 text-sm mt-1">Implements JWT cookie-based authentication, secure user operations, and advanced task querying including pagination, searching (title + description), filtering by status, and sorting. Fully documented using Swagger UI.</p>
                </div>
                
                <div>
                    <h3 className="font-semibold text-green-400">Project Three: Scoutrix (Full Stack / AI)</h3>
                    <p className="text-gray-300 text-sm mt-1">An offline-first, AI-powered athlete verification and recruitment infrastructure built for rural India. (Collaborative Hackathon Project)</p>
                    <p className="text-gray-300 text-sm mt-1">Replaces geography-dependent physical trials with a digital Standardized Performance Index (SPI). Utilizes TensorFlow.js (MediaPipe) for local in-device video analysis to extract biomechanical metrics without backend computing. Includes an automated recruitment ranking engine and live performance narratives generated via the Google Gemini API.</p>
                    <p className="text-gray-300 text-sm mt-1 italic">Tech Stack: React, Vite, Express.js, MongoDB, JWT, TensorFlow.js, ImageKit CDN.</p>
                </div>
            </div>
        </div>
    );
    
    const contactContent = () => (
        <div className="text-white">
            <h2 className="text-xl font-bold text-green-400 mb-2">Contact Me</h2>
            <p>You can reach me via the following channels:</p>
            <ul className="list-disc list-inside mt-2">
                <li>Email: <a href="mailto:abhinav.anil.work@gmail.com" target='_blank' rel='noreferrer' className="text-blue-400 hover:underline">abhinav.anil.work@gmail.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/abhinav-anil-b820672b0" target='_blank' rel='noreferrer' className="text-blue-400 hover:underline">linkedin.com/in/abhinav-anil-b820672b0</a></li>
                <li>GitHub: <a href="https://github.com/Abhinav-Anil-5670" target='_blank' rel='noreferrer' className="text-blue-400 hover:underline">github.com/Abhinav-Anil-5670</a></li>
            </ul>
        </div>
    );

    const handleCommand = (command) => {
        const newHistory = [...history, { command, path: currentPath }];
        let output;

        switch (command.toLowerCase()) {
            case 'help':
                output = helpContent();
                break;
            case 'cd about':
                output = aboutContent();
                break;
            case 'cd skills':
                output = skillsContent();
                break;
            case 'cd projects':
                output = projectsContent();
                break;
            case 'cd contact':
                output = contactContent();
                break;
            case 'clear':
                setHistory([]);
                return;
            default:
                output = `Command not found: ${command}. Type 'help' for a list of commands.`;
                break;
        }
        setHistory([...newHistory, { output }]);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            handleCommand(input.trim());
        }
        setInput('');
    };
    
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div
            className="bg-black text-white font-mono h-screen w-screen overflow-hidden p-4 sm:p-6 md:p-8"
            onClick={focusInput}
        >
            <div ref={terminalRef} className="h-full w-full overflow-y-auto pb-10 scrollbar-hide">
                
                <WelcomeMessage />

                {history.map((item, index) => (
                    <div key={index} className="mb-4">
                        {item.command && (
                            <div className="flex items-center">
                                <span className="text-green-400">abhinav@portfolio:{item.path}$</span>
                                <span className="ml-2">{item.command}</span>
                            </div>
                        )}
                        {item.output && <div className="mt-2">{typeof item.output === 'string' ? <p>{item.output}</p> : item.output}</div>}
                    </div>
                ))}

                <form onSubmit={handleFormSubmit} className="flex items-center mt-2">
                    <span className="text-green-400 whitespace-nowrap">abhinav@portfolio:{currentPath}$</span>
                    <input
                        ref={inputRef}
                        id="terminal-input"
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        className="bg-transparent border-none text-white focus:outline-none flex-grow ml-2"
                        autoFocus
                        autoComplete="off"
                        spellCheck="false"
                    />
                </form>
            </div>
        </div>
    );
};

export default App;