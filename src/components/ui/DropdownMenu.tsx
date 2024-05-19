import { ReactNode, useState, useRef, useEffect } from "react";

export function DropdownMenu({ children }: { children: ReactNode }) {
  return <div className="dropdown-menu">{children}</div>;
}

export function DropdownMenuTrigger({ children }: { children: ReactNode }) {
  return <div className="dropdown-trigger">{children}</div>;
}

export function DropdownMenuContent({ children }: { children: ReactNode }) {
  return <div className="dropdown-content">{children}</div>;
}

export function DropdownMenuItem({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className="dropdown-item" onClick={onClick}>
      {children}
    </div>
  );
}

<style jsx>{`
  .dropdown-menu {
    position: relative;
    display: inline-block;
  }
  .dropdown-trigger:hover + .dropdown-content,
  .dropdown-content:hover {
    display: block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .dropdown-item {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-item:hover {
    background-color: #ddd;
  }
`}</style>;
