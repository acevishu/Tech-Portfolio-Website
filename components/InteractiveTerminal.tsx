"use client";

import { FormEvent, KeyboardEvent, useRef, useState } from "react";
import { interactiveTerminal } from "@/data/terminal";

type LogEntry = {
  type: "input" | "output";
  text: string;
};

const initialLog: LogEntry[] = [
  { type: "output", text: interactiveTerminal.initialLog }
];

export function InteractiveTerminal() {
  const [command, setCommand] = useState("");
  const [log, setLog] = useState<LogEntry[]>(initialLog);
  const inputRef = useRef<HTMLInputElement>(null);

  function runCommand(rawCommand: string) {
    const normalized = rawCommand.trim().toLowerCase();
    if (!normalized) return;

    if (normalized === "clear") {
      setLog(initialLog);
      setCommand("");
      return;
    }

    const response = interactiveTerminal.responses[normalized] ?? [
      `${interactiveTerminal.unknownCommandPrefix} ${normalized}`,
      interactiveTerminal.unknownCommandHelp
    ];

    setLog((entries) => [
      ...entries,
      { type: "input", text: normalized },
      ...response.map((text) => ({ type: "output" as const, text }))
    ]);
    setCommand("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runCommand(command);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      runCommand(command);
    }
  }

  return (
    <section className="section-shell py-16">
      <div
        className="terminal-edge circuit-panel rounded-md"
        onClick={() => inputRef.current?.focus()}
        role="application"
        aria-label={interactiveTerminal.ariaLabel}
      >
        <div className="flex items-center justify-between border-b border-cyan/15 px-4 py-3 font-mono text-xs text-muted">
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-neon/80" />
          </div>
          <span>{interactiveTerminal.title}</span>
          <span className="text-cyan">{interactiveTerminal.auth}</span>
        </div>
        <div className="max-h-96 overflow-y-auto p-5 font-mono text-sm leading-7">
          {log.map((entry, index) => (
            <p key={`${entry.text}-${index}`} className={entry.type === "input" ? "text-neon" : "text-muted"}>
              {entry.type === "input" ? `> ${entry.text}` : entry.text}
            </p>
          ))}
          <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-2">
            <label htmlFor="terminal-command" className="text-cyan">
              {interactiveTerminal.prompt}
            </label>
            <input
              ref={inputRef}
              id="terminal-command"
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-neon outline-none placeholder:text-muted/60"
              placeholder={interactiveTerminal.placeholder}
              autoComplete="off"
              spellCheck={false}
            />
            <span className="h-5 w-2 bg-neon animate-blink" aria-hidden="true" />
          </form>
        </div>
      </div>
    </section>
  );
}
