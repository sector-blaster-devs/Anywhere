export interface DependencyLicense {
  name: string;
  version: string;
  license: string;
  author: string;
  description: string;
  homepage: string;
  fullLicenseText: string;
}

export interface AiModelCredit {
  name: string;
  provider: string;
  role: string;
  description: string;
  termsUrl: string;
}

export interface LandmarkCredit {
  name: string;
  category: string;
  region: string;
  significance: string;
}

export const AI_CREDITS: AiModelCredit[] = [
  {
    name: 'Gemini 3.1 Flash Lite Image',
    provider: 'Google DeepMind',
    role: 'Visual Synthesis & Contextual Compositing',
    description: 'Powers real-time contextual re-imagining of uploaded portraits across 48 worldwide architectural and natural wonders with 3:4 aspect ratio.',
    termsUrl: 'https://ai.google.dev/gemini-api/terms'
  },
  {
    name: 'Gemini 3.1 Flash Lite',
    provider: 'Google DeepMind',
    role: 'Curated Cultural & Historical Intelligence',
    description: 'Generates structured travel summaries, historical context, and architectural overviews for each global destination.',
    termsUrl: 'https://ai.google.dev/gemini-api/terms'
  },
  {
    name: 'Gemini Omni 1.1 Flash',
    provider: 'Google DeepMind',
    role: 'Cinematic Motion & Video Generation',
    description: 'Generates dynamic, high-fidelity panning travel videos from composite still images via the Google Gemini Interactions API.',
    termsUrl: 'https://ai.google.dev/gemini-api/terms'
  },
  {
    name: '@google/genai SDK (v2.4.0)',
    provider: 'Google LLC',
    role: 'Client & Server AI Integration',
    description: 'Official Google GenAI TypeScript/JavaScript SDK providing standardized interaction and media delivery primitives.',
    termsUrl: 'https://www.npmjs.com/package/@google/genai'
  }
];

export const DEPENDENCY_LICENSES: DependencyLicense[] = [
  {
    name: 'three',
    version: '^0.184.0',
    license: 'MIT',
    author: 'Ricardo Cabello (mrdoob) and Three.js authors',
    description: 'JavaScript 3D library providing WebGL renderers, geometric calculations, materials, and spherical spatial projection.',
    homepage: 'https://threejs.org/',
    fullLicenseText: `The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`
  },
  {
    name: '@react-three/fiber',
    version: '^9.6.1',
    license: 'MIT',
    author: 'Poimandres',
    description: 'React renderer for three.js allowing declarative construction of scene graphs with zero overhead.',
    homepage: 'https://github.com/pmndrs/react-three-fiber',
    fullLicenseText: `The MIT License (MIT)

Copyright (c) 2019-2026 Poimandres

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  },
  {
    name: '@react-three/drei',
    version: '^10.7.7',
    license: 'MIT',
    author: 'Poimandres',
    description: 'Curated collection of useful helpers, abstractions, and camera controllers for React Three Fiber.',
    homepage: 'https://github.com/pmndrs/drei',
    fullLicenseText: `The MIT License (MIT)

Copyright (c) 2020-2026 Poimandres

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  },
  {
    name: 'react & react-dom',
    version: '^19.0.1',
    license: 'MIT',
    author: 'Meta Platforms, Inc. and affiliates',
    description: 'The library for web and native user interfaces, handling reactive component state and DOM reconciliation.',
    homepage: 'https://react.dev/',
    fullLicenseText: `MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  },
  {
    name: 'motion',
    version: '^12.23.24',
    license: 'MIT',
    author: 'Motion Software Ltd & Framer B.V.',
    description: 'Production-ready declarative animation and gesture engine for React and web applications.',
    homepage: 'https://motion.dev/',
    fullLicenseText: `MIT License

Copyright (c) 2018-2026 Motion Software Ltd and Framer B.V.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  },
  {
    name: 'tailwindcss',
    version: '^4.1.14',
    license: 'MIT',
    author: 'Tailwind Labs, Inc.',
    description: 'A utility-first CSS framework for rapid UI development with compile-time zero-runtime styling.',
    homepage: 'https://tailwindcss.com/',
    fullLicenseText: `MIT License

Copyright (c) Tailwind Labs, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  },
  {
    name: 'lucide-react',
    version: '^0.546.0',
    license: 'ISC',
    author: 'Lucide Contributors',
    description: 'Beautiful & consistent icon toolkit for modern React applications.',
    homepage: 'https://lucide.dev/',
    fullLicenseText: `ISC License

Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT).
All other copyright (c) 2022-2026 by Lucide Contributors.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
  },
  {
    name: 'express',
    version: '^4.21.2',
    license: 'MIT',
    author: 'Expressjs contributors & StrongLoop, Inc.',
    description: 'Fast, unopinionated, minimalist web framework for Node.js.',
    homepage: 'https://expressjs.com/',
    fullLicenseText: `(The MIT License)

Copyright (c) 2009-2014 TJ Holowaychuk <tj@vision-media.ca>
Copyright (c) 2013-2014 Roman Shtylman <shtylman+expressjs@gmail.com>
Copyright (c) 2014-2015 Douglas Christopher Wilson <doug@somethingdoug.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  },
  {
    name: 'vite',
    version: '^6.2.3',
    license: 'MIT',
    author: 'Yuxi (Evan) You and Vite Contributors',
    description: 'Next generation frontend tooling with lightning fast HMR and optimized Rollup bundling.',
    homepage: 'https://vitejs.dev/',
    fullLicenseText: `MIT License

Copyright (c) 2019-present, Yuxi (Evan) You and Vite contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  },
  {
    name: 'react-markdown',
    version: '^10.1.0',
    license: 'MIT',
    author: 'Titus Wormer and unified community',
    description: 'Markdown component for React using remark without dangerouslySetInnerHTML.',
    homepage: 'https://github.com/remarkjs/react-markdown',
    fullLicenseText: `(The MIT License)

Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
];

export const TYPOGRAPHY_CREDITS = [
  {
    name: 'MuseoModerno',
    designer: 'Héctor Gatti and Omnibus-Type Team',
    license: 'SIL Open Font License 1.1',
    description: 'Contemporary geometric display typeface inspired by the 20th-century artistic vanguard and modernist architecture.',
    url: 'https://fonts.google.com/specimen/MuseoModerno'
  }
];

export const APP_LEGAL_OVERVIEW = {
  appName: 'Remix Anywhere',
  version: '1.0.0',
  license: 'MIT License',
  copyright: 'Copyright (c) 2025-2026 Remix Anywhere Contributors',
  termsSummary: 'Remix Anywhere is provided free and open source. All user-uploaded portraits are processed ephemerally for generative compositing during your session and are governed by the Google Generative AI Terms of Service and Prohibited Use Policy.'
};
