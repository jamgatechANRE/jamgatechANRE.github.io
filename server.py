import http.server
import socketserver
import os

PORT = 8000

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Strip query strings or fragments
        clean_path = path.split('?')[0].split('#')[0]
        
        # If they request a clean URL like '/work', check if 'work.html' exists
        if not clean_path.endswith('/') and not '.' in clean_path.split('/')[-1]:
            # Construct the absolute path to check if the .html version exists
            potential_file = self.translate_path_original(clean_path + '.html')
            if os.path.isfile(potential_file):
                return potential_file
                
        return self.translate_path_original(path)

    def translate_path_original(self, path):
        """Helper to call the original path resolution logic"""
        return super().translate_path(path)

with socketserver.TCPServer(("", PORT), CleanURLHandler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    print("Clean URLs enabled (e.g., /work will serve work.html)")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
