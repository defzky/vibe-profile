import Image from "next/image";

export default function AboutManifesto() {
    return (
        <section className="px-4 py-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="font-mono text-accent text-sm sticky top-10 h-fit flex flex-col gap-8">
                    <div className="relative w-full aspect-square overflow-hidden border-2 border-accent grayscale hover:grayscale-0 transition-all duration-500">
                        <Image
                            src="/profile.png"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
                    </div>

                    <div>
                        {"// MANIFESTO"}
                        <br /><br />
                        SOFTWARE ENGINEER
                        <br />
                        CREATIVE TECHNOLOGIST
                        <br />
                        CYCLIST
                        <br />
                        BIO-HACKER
                        <br />
                        VIBE CODING
                    </div>
                </div>

                <div>
                    <p className="text-4xl md:text-6xl font-bold leading-tight uppercase indent-20">
                        I build digital experiences that <span className="text-accent">bleed</span> through the screen.
                        Rejecting the mundane, I fuse <span className="line-through decoration-accent decoration-2">clean code</span> with
                        raw kinetic energy.
                    </p>
                    <p className="mt-20 text-xl md:text-2xl font-mono text-gray-400 leading-relaxed">
                        My work is a collision of organic systems and mechanical precision.
                        Utilizing the bleeding edge of web technology to create
                        interfaces that feel alive.
                    </p>

                    <div className="mt-32 grid grid-cols-2 gap-8 font-mono text-xs uppercase">
                        <div>
                            <h3 className="text-accent mb-4 border-b border-accent w-fit">{"// STACK"}</h3>
                            <ul className="space-y-2">
                                <li>Next.js / React 19</li>
                                <li>WebGL / Three.js</li>
                                <li>Rust / Wasm</li>
                                <li>Node.js / Bun</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-accent mb-4 border-b border-accent w-fit">{"// CONTACT"}</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-accent">GitHub</a></li>
                                <li><a href="#" className="hover:text-accent">Twitter</a></li>
                                <li><a href="#" className="hover:text-accent">Email</a></li>
                                <li><a href="#" className="hover:text-accent">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
