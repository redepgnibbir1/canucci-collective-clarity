
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ComparisonTableProps {
  title: string;
  headers: [string, string];
  rows: Array<[string, string]>;
}

const ComparisonTable = ({ title, headers, rows }: ComparisonTableProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-black mb-6">{title}</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{headers[0]}</TableHead>
              <TableHead>{headers[1]}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map(([col1, col2], index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{col1}</TableCell>
                <TableCell>{col2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ComparisonTable;
