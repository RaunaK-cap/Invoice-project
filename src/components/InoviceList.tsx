
import { InvoiceAction } from "./invoiceaction";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export function InvoiceList(){
    return <>
    <Table>
        <TableHeader>
            <TableHead> Inoive ID </TableHead>
            <TableHead> Customer </TableHead>
            <TableHead> Amount </TableHead>
            <TableHead> Status </TableHead>
            <TableHead> Date </TableHead>
            <TableHead className="text-right"> Actions </TableHead>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell> #1</TableCell>
                <TableCell> AVaX</TableCell>
                <TableCell> $69.69</TableCell>
                <TableCell> Pending</TableCell>
                <TableCell> 04-08-2025</TableCell>
                <TableCell className=" text-right"> 
                    <InvoiceAction/>
                </TableCell>
            </TableRow>
        </TableBody>

    </Table>
    
    </>
}