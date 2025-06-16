"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bell,
  Search,
  Filter,
  Phone,
  Mail,
  Car,
  Home,
  Plane,
  Shield,
  Building,
  Heart,
  Calendar,
  DollarSign,
} from "lucide-react";

interface QuoteRequest {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  insuranceCategory: string;
  insuranceType: string;
  selectedInsurer: string;
  totalPremium: number;
  timestamp: string;
  status: "new" | "contacted" | "completed";
  vehicleRegistration?: string;
  propertyValue?: string;
  travelDestination?: string;
}

// Mock data - In real app, this would come from a database
const mockQuoteRequests: QuoteRequest[] = [
  {
    id: "1",
    clientName: "John Doe",
    clientPhone: "+254 700 123 456",
    clientEmail: "john@example.com",
    insuranceCategory: "Motor Insurance",
    insuranceType: "Motor Private",
    selectedInsurer: "TOR",
    totalPremium: 4140,
    timestamp: "2024-01-15T10:30:00Z",
    status: "new",
    vehicleRegistration: "KCA 123A",
  },
  {
    id: "2",
    clientName: "Jane Smith",
    clientPhone: "+254 701 234 567",
    clientEmail: "jane@example.com",
    insuranceCategory: "Property Insurance",
    insuranceType: "Home Insurance",
    selectedInsurer: "APA",
    totalPremium: 16040,
    timestamp: "2024-01-15T14:20:00Z",
    status: "contacted",
    propertyValue: "5000000",
  },
  {
    id: "3",
    clientName: "Mike Johnson",
    clientPhone: "+254 702 345 678",
    clientEmail: "mike@example.com",
    insuranceCategory: "Travel Insurance",
    insuranceType: "Travel Insurance",
    selectedInsurer: "Jubilee",
    totalPremium: 16540,
    timestamp: "2024-01-15T16:45:00Z",
    status: "new",
    travelDestination: "Europe/USA",
  },
];

const categoryIcons = {
  "Motor Insurance": Car,
  "Property Insurance": Home,
  "Travel Insurance": Plane,
  "Personal Insurance": Shield,
  "Business Insurance": Building,
  "Life Insurance": Heart,
};

export default function AdminDashboard() {
  const [quoteRequests, setQuoteRequests] =
    useState<QuoteRequest[]>(mockQuoteRequests);
  const [filteredRequests, setFilteredRequests] =
    useState<QuoteRequest[]>(mockQuoteRequests);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    let filtered = quoteRequests;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (request) =>
          request.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          request.clientEmail
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          request.clientPhone.includes(searchTerm)
      );
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((request) => request.status === statusFilter);
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (request) => request.insuranceCategory === categoryFilter
      );
    }

    setFilteredRequests(filtered);
  }, [searchTerm, statusFilter, categoryFilter, quoteRequests]);

  const updateRequestStatus = (
    id: string,
    newStatus: "new" | "contacted" | "completed"
  ) => {
    setQuoteRequests((prev) =>
      prev.map((request) =>
        request.id === id ? { ...request, status: newStatus } : request
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-red-100 text-red-800";
      case "contacted":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const newRequestsCount = quoteRequests.filter(
    (r) => r.status === "new"
  ).length;
  const totalPremiumValue = quoteRequests.reduce(
    (sum, r) => sum + r.totalPremium,
    0
  );

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Insurance Quote Dashboard</h1>
          <p className="text-muted-foreground">
            Manage and track client quote requests
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-red-100 text-red-800 px-3 py-2 rounded-lg">
            <Bell className="h-4 w-4" />
            <span className="font-semibold">
              {newRequestsCount} New Requests
            </span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Bell className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Requests</p>
                <p className="text-2xl font-bold">{quoteRequests.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Bell className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">New Requests</p>
                <p className="text-2xl font-bold">{newRequestsCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Premium Value
                </p>
                <p className="text-2xl font-bold">
                  KSh {totalPremiumValue.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Today's Requests
                </p>
                <p className="text-2xl font-bold">
                  {
                    quoteRequests.filter(
                      (r) =>
                        new Date(r.timestamp).toDateString() ===
                        new Date().toDateString()
                    ).length
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Search</label>
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Motor Insurance">
                    Motor Insurance
                  </SelectItem>
                  <SelectItem value="Property Insurance">
                    Property Insurance
                  </SelectItem>
                  <SelectItem value="Travel Insurance">
                    Travel Insurance
                  </SelectItem>
                  <SelectItem value="Life Insurance">Life Insurance</SelectItem>
                  <SelectItem value="Business Insurance">
                    Business Insurance
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quote Requests List */}
      <div className="space-y-4">
        {filteredRequests.map((request) => {
          const IconComponent =
            categoryIcons[
              request.insuranceCategory as keyof typeof categoryIcons
            ] || Shield;

          return (
            <Card
              key={request.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-lg">
                          {request.clientName}
                        </h3>
                        <Badge className={getStatusColor(request.status)}>
                          {request.status.charAt(0).toUpperCase() +
                            request.status.slice(1)}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{request.clientPhone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{request.clientEmail}</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <p>
                            <strong>Insurance:</strong> {request.insuranceType}
                          </p>
                          <p>
                            <strong>Insurer:</strong> {request.selectedInsurer}
                          </p>
                          <p>
                            <strong>Premium:</strong> KSh{" "}
                            {request.totalPremium.toLocaleString()}
                          </p>
                          {request.vehicleRegistration && (
                            <p>
                              <strong>Vehicle:</strong>{" "}
                              {request.vehicleRegistration}
                            </p>
                          )}
                          {request.propertyValue && (
                            <p>
                              <strong>Property Value:</strong> KSh{" "}
                              {request.propertyValue}
                            </p>
                          )}
                          {request.travelDestination && (
                            <p>
                              <strong>Destination:</strong>{" "}
                              {request.travelDestination}
                            </p>
                          )}
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        Requested on{" "}
                        {new Date(request.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Select
                      value={request.status}
                      onValueChange={(
                        value: "new" | "contacted" | "completed"
                      ) => updateRequestStatus(request.id, value)}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={`tel:${request.clientPhone}`}>
                          <Phone className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`mailto:${request.clientEmail}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredRequests.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              No quote requests found
            </h3>
            <p className="text-muted-foreground">
              {searchTerm || statusFilter !== "all" || categoryFilter !== "all"
                ? "Try adjusting your filters to see more results."
                : "New quote requests will appear here."}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
