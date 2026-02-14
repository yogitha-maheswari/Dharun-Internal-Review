"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { employee } from "@/data/content";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { AnimatedText } from "@/components/AnimatedText";

const LoginPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const validUser =
        username.trim().toLowerCase() === "yogitha maheswari";
      const validPass = password.trim() === "29122022";

      if (validUser && validPass) {
        router.push("/dashboard");
      } else {
        setError("Invalid credentials. Think harder. ❤️");
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <BackgroundGlow />
      <div className="ambient-glow" />

      <motion.div
        className="relative z-10 glass-card p-8 md:p-12 w-full max-w-md rounded-2xl border border-border shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatedText delay={0.2}>
          <h1 className="text-2xl md:text-3xl font-heading gradient-text text-center mb-2">
            Internal Review Portal
          </h1>
          <p className="text-center text-xs tracking-widest uppercase mb-6 text-muted-soft">
            Confidential
          </p>
        </AnimatedText>

        {/* Profile line */}
        <AnimatedText delay={0.5} className="mb-8">
          <div className="text-sm font-serif-elegant text-center">
            <span className="text-muted-soft">Profile Under Review:</span>
            <span className="text-foreground font-medium ml-2">
              {employee.name}
            </span>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.8}>
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-xs mb-1.5 uppercase tracking-wider text-muted-soft">
                Username
              </label>

              <div className="relative rounded-xl">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your gf's full name"
                  className="peer w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none transition-all"
                />

                {/* Gradient border on focus */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 peer-focus:opacity-100 transition-opacity"
                  style={{
                    padding: "1.5px",
                    background: "var(--gradient-warm)",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs mb-1.5 uppercase tracking-wider text-muted-soft">
                Password
              </label>

              <div className="relative rounded-xl">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="The date you first met her (DDMMYYYY)"
                  className="peer w-full px-4 py-3 pr-12 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none transition-all"
                />

                {/* Eye button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 gradient-icon"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>

                {/* Gradient border on focus */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 peer-focus:opacity-100 transition-opacity"
                  style={{
                    padding: "1.5px",
                    background: "var(--gradient-warm)",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
              </div>
            </div>

            {/* Error message */}
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-center font-medium"
              >
                <span className="gradient-text">
                  Invalid credentials. Think harder.
                </span>
                <span className="ml-1">❤️</span>
              </motion.p>
            )}

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-sans text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 disabled:opacity-50"
              style={{ background: "var(--gradient-warm)" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px hsl(8, 85%, 56%, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Verifying..." : "Access Report"}
            </motion.button>
          </form>
        </AnimatedText>

        <AnimatedText delay={1.2}>
          <p className="text-center text-[10px] mt-8 italic font-serif text-muted-soft">
            Prepared by: The Only Person Who Sees Everything
          </p>
        </AnimatedText>
      </motion.div>
    </div>
  );
};

export default LoginPage;
