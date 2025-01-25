import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2025 Netwrokind. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/netwrokind" className="text-muted-foreground hover:text-primary">
              <Github size={24} />
            </a>
            <a href="https://twitter.com/netwrokind" className="text-muted-foreground hover:text-primary">
              <Twitter size={24} />
            </a>
            <a href="https://linkedin.com/company/netwrokind" className="text-muted-foreground hover:text-primary">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

