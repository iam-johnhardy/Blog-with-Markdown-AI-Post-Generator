Blog with Markdown AI Post Generator

An AI-powered blogging tool that generates well-structured blog posts in Markdown format, making it easy to write, preview, and publish high-quality content quickly.

🚀 Features

✨ AI-Generated Content – Generate blog posts based on a prompt or topic.

📝 Markdown Support – Output posts in clean Markdown format for easy formatting.

🔍 SEO-Friendly – AI ensures blog posts follow SEO best practices.

📂 Post Management – Save, edit, and organize generated posts.

🌐 Easy Deployment – Works with static site generators like Next.js, Gatsby, Jekyll, Hugo, etc.

📂 Project Structure
Blog-with-Markdown-AI-Post-Generator/
│── src/              # Source code (React/Next.js/Backend)
│── posts/            # Generated markdown blog posts
│── public/           # Static assets
│── README.md         # Project documentation
│── package.json      # Dependencies & scripts

⚙️ Installation

Clone the repo:

git clone https://github.com/your-username/Blog-with-Markdown-AI-Post-Generator.git
cd Blog-with-Markdown-AI-Post-Generator


Install dependencies:

npm install
# or
yarn install


Add your AI API key (e.g., OpenAI API key) in an .env file:

OPENAI_API_KEY=your_api_key_here


Run the development server:

npm run dev

🖊 Usage

Enter a blog topic or prompt.

The AI will generate a Markdown-formatted post.

Edit or refine the post before publishing.

Export or save it in the posts/ folder.

📦 Deployment

You can deploy easily on platforms like:

Vercel



GitHub Pages

🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

📜 License

This project is licensed under the MIT License.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
