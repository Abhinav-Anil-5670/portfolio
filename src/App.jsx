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
                I'm Abhinav Anil. As a third-year Computer Science student, I've found my passion at the intersection of design and technology as a frontend developer. I'm currently on a journey to become a more well-rounded engineer by diving into backend development and AI."
            </p>
        </div>
    );

    const skillsContent = () => (
        <div className="text-white">
            <h2 className="text-xl font-bold text-green-400 mb-2">Technical Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div>
                    <h3 className="font-semibold mb-1">Languages</h3>
                    <ul className="list-disc list-inside">
                        <li>JavaScript</li>
                        <li>HTML5 & CSS3</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">Frameworks/Libraries</h3>
                    <ul className="list-disc list-inside">
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">Styling</h3>
                    <ul className="list-disc list-inside">
                        <li>Tailwind CSS</li>
                        <li>SCSS</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">Tools & Platforms</h3>
                    <ul className="list-disc list-inside">
                        <li>Git & GitHub</li>
                        <li>Vercel</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    const projectsContent = () => (
        <div className="text-white">
            <h2 className="text-xl font-bold text-green-400 mb-2">Projects</h2>
            <div className="space-y-4">
                
                <div>
                    <h3 className="font-semibold text-green-400 hover:text-white"><a href="https://github.com/Abhinav-Anil-5670/cinevault" target='_blank'>Project One: CineVault</a></h3>
                    <p className="text-gray-300 text-sm">A web application that provides detailed information about movies, TV shows, and celebrities, powered by the TMDb API.
                      
                    </p>
                    <p className="text-gray-300 text-sm">Browse trending and popular titles, filter results, view details, and watch trailers. Includes a global search and external links to IMDb, social media, and official websites.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-green-400 hover:text-white"><a href="https://github.com/GN-30/PING-Quick-Learning-App-" target='_blank'>Project Two: KnowledgeSphere</a></h3>
                    <p className="text-gray-300 text-sm">This is a project I build for a hackathon.</p>
                    <p className="text-gray-300 text-sm">An AI-powered content platform that transforms learning into a personalized experience, replacing mindless scrolling with an infinite reel of fascinating facts.</p>
                    <p className="text-gray-300 text-sm">Users select topics to customize their feed. Pressing the down arrow key generates a fresh, insightful fact in real-time using the Mistral AI model.</p>
                </div>
                
                <div>
                    <h3 className="font-semibold text-green-400 hover:text-white"><a href="https://github.com/Abhinav-Anil-5670/portfolio" target='_blank'>Project Three: This Portfolio!</a></h3>
                    <p className="text-gray-300 text-sm">An interactive, terminal-based portfolio built with React and Tailwind CSS to showcase my skills and projects in a unique way.</p>
                </div>
            </div>
        </div>
    );
    
    const contactContent = () => (
        <div className="text-white">
            <h2 className="text-xl font-bold text-green-400 mb-2">Contact Me</h2>
            <p>You can reach me via the following channels:</p>
            <ul className="list-disc list-inside mt-2">
                <li>Email: <a href="abhinav.anil.work@gmail.com"target='_blank' className="text-blue-400 hover:underline">abhinav.anil.work@gmail.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/abhinav-anil-b820672b0" target='_blank' className="text-blue-400 hover:underline">linkedin.com/in/abhinav-anil-b820672b0</a></li>
                <li>GitHub: <a href="https://github.com/Abhinav-Anil-5670" target='_blank' className="text-blue-400 hover:underline">github.com/Abhinav-Anil-5670</a></li>
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
            <div ref={terminalRef} className="h-full w-full overflow-y-auto">
                
                <WelcomeMessage />

                
                {history.map((item, index) => (
                    <div key={index} className="mb-2">
                        {item.command && (
                            <div className="flex items-center">
                                <span className="text-green-400">abhinav@portfolio:{item.path}$</span>
                                <span className="ml-2">{item.command}</span>
                            </div>
                        )}
                        {item.output && <div>{typeof item.output === 'string' ? <p>{item.output}</p> : item.output}</div>}
                    </div>
                ))}

                
                <form onSubmit={handleFormSubmit} className="flex items-center">
                    <span className="text-green-400">abhinav@portfolio:{currentPath}$</span>
                    <input
                        ref={inputRef}
                        id="terminal-input"
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        className="bg-transparent border-none text-white focus:outline-none flex-grow ml-2"
                        autoFocus
                    />
                </form>
            </div>
        </div>
    );
};

export default App;