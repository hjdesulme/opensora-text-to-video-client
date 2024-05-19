import { ReactNode } from "react";

export function Table({ children }: { children: ReactNode }) {
  return <table className="table">{children}</table>;
}

export function TableHeader({ children }: { children: ReactNode }) {
  return <thead className="table-header">{children}</thead>;
}

export function TableBody({ children }: { children: ReactNode }) {
  return <tbody className="table-body">{children}</tbody>;
}

export function TableRow({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <tr className="table-row" onClick={onClick}>
      {children}
    </tr>
  );
}

export function TableHead({ children }: { children: ReactNode }) {
  return <th className="table-head">{children}</th>;
}

export function TableCell({ children }: { children: ReactNode }) {
  return <td className="table-cell">{children}</td>;
}

<style jsx>{`
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  .table-header {
    background-color: #f1f1f1;
  }
  .table-body {
    background-color: #ffffff;
  }
  .table-row:hover {
    background-color: #f9f9f9;
    cursor: pointer;
  }
  .table-head,
  .table-cell {
    padding: 10px;
    border: 1px solid #ddd;
  }
`}</style>;
