"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageSquare, Send, Sparkles, X } from "lucide-react";
import React, { useState } from "react";

const initialMessages = [
    {
        role: "assistant",
        content: "Hi there! I'm your AI coding assistant. Ask me anything about my projects or skills!",
    },
];

export const ChatSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const newMessage = { role: "user", content: inputValue };
        setMessages([...messages, newMessage]);
        setInputValue("");

        // Simulate AI response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "That's an interesting question! I specialize in React, Next.js, and building scalable web applications. Feel free to check out my projects section for more details.",
                },
            ]);
        }, 1000);
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-primary to-accent shadow-glow transition-all duration-300 hover:scale-110 ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                    }`}
                whileHover={{ rotate: 15 }}
            >
                <MessageSquare className="size-6 text-white" />
            </motion.button>

            {/* Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-8 right-4 md:bottom-8 md:right-8 z-50 w-[90vw] md:w-[400px] h-[500px] bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-gradient-to-r from-primary to-accent">
                                    <Bot className="size-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">AI Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="text-white/50 text-xs">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                            ? "bg-primary text-white rounded-tr-sm"
                                            : "bg-white/10 text-white/90 rounded-tl-sm"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10 bg-white/5">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage();
                                }}
                                className="relative"
                            >
                                <input
                                    type="text"
                                    placeholder="Ask me anything..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="w-full bg-gray-800/50 text-white text-sm rounded-xl py-3 pl-4 pr-12 border border-white/10 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/30"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                                >
                                    <Send className="size-4" />
                                </button>
                            </form>
                            {/* <div className="mt-2 flex justify-center">
                                <span className="text-[10px] text-white/30 flex items-center gap-1">
                                    <Sparkles className="size-2.5" />
                                    Powered by Antigravity AI
                                </span>
                            </div> */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
