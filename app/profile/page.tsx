import Link from "next/link"
import Image from "next/image"
import { Bell, CreditCard, Heart, History, LogOut, Settings, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export default function ProfilePage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
          <p className="text-muted-foreground">Manage your profile, orders, and preferences</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">john.doe@example.com</div>
                </div>
              </div>
              <Separator />
              <nav className="space-y-2">
                <Link href="/profile">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                </Link>
                <Link href="/profile/orders">
                  <Button variant="ghost" className="w-full justify-start">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Orders
                  </Button>
                </Link>
                <Link href="/wishlist">
                  <Button variant="ghost" className="w-full justify-start">
                    <Heart className="mr-2 h-4 w-4" />
                    Wishlist
                  </Button>
                </Link>
                <Link href="/profile/history">
                  <Button variant="ghost" className="w-full justify-start">
                    <History className="mr-2 h-4 w-4" />
                    Browsing History
                  </Button>
                </Link>
                <Link href="/profile/payment">
                  <Button variant="ghost" className="w-full justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Button>
                </Link>
                <Link href="/profile/notifications">
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                </Link>
                <Link href="/profile/settings">
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </Link>
                <Separator />
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </nav>
            </div>
          </div>
          <div className="md:col-span-3">
            <Tabs defaultValue="profile">
              <TabsList className="w-full">
                <TabsTrigger value="profile" className="flex-1">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="orders" className="flex-1">
                  Orders
                </TabsTrigger>
                <TabsTrigger value="wishlist" className="flex-1">
                  Wishlist
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex-1">
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details and contact information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium">First Name</label>
                        <Input defaultValue={'John'} />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Last Name</label>
                        <Input defaultValue={'Doe'} />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <Input defaultValue={'john.doe@example.com'} />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Phone</label>
                        <Input defaultValue={'+1 (555) 123-4567'} />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Address Information</CardTitle>
                    <CardDescription>Manage your shipping and billing addresses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="rounded-lg border p-4">
                        <div className="flex justify-between">
                          <div className="font-medium">Shipping Address</div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">
                          <p>John Doe</p>
                          <p>123 Main Street</p>
                          <p>Apt 4B</p>
                          <p>New York, NY 10001</p>
                          <p>United States</p>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex justify-between">
                          <div className="font-medium">Billing Address</div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">
                          <p>John Doe</p>
                          <p>123 Main Street</p>
                          <p>Apt 4B</p>
                          <p>New York, NY 10001</p>
                          <p>United States</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="orders" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                    <CardDescription>View and manage your past orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">#ORD-12345</TableCell>
                          <TableCell>March 15, 2023</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              Completed
                            </span>
                          </TableCell>
                          <TableCell className="text-right">$89,990</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">#ORD-12344</TableCell>
                          <TableCell>January 5, 2023</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                              Processing
                            </span>
                          </TableCell>
                          <TableCell className="text-right">$54,990</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">#ORD-12343</TableCell>
                          <TableCell>November 12, 2022</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              Completed
                            </span>
                          </TableCell>
                          <TableCell className="text-right">$64,990</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="wishlist" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Wishlist</CardTitle>
                    <CardDescription>Cars you've saved for later</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg border overflow-hidden">
                        <div className="relative h-40">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Tesla Model S"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="font-medium">Tesla Model S</div>
                          <div className="text-sm text-muted-foreground">Electric • 2023</div>
                          <div className="mt-2 font-bold">$89,990</div>
                          <div className="mt-4 flex space-x-2">
                            <Button size="sm" className="flex-1">
                              View
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border overflow-hidden">
                        <div className="relative h-40">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Porsche 911"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="font-medium">Porsche 911</div>
                          <div className="text-sm text-muted-foreground">Sports • 2023</div>
                          <div className="mt-2 font-bold">$114,990</div>
                          <div className="mt-4 flex space-x-2">
                            <Button size="sm" className="flex-1">
                              View
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm">Order updates</label>
                          <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm">New car listings</label>
                          <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm">Promotions and deals</label>
                          <Switch checked={false} />
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm">Newsletter</label>
                          <Switch checked={true} />
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium">Theme Preferences</h3>
                      <div className="mt-2">
                        <div className="flex items-center space-x-2">
                          <label className="text-sm">Dark Mode</label>
                          <Switch checked={false} />
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium">Password</h3>
                      <div className="mt-2 space-y-2">
                        <div>
                          <label className="text-sm">Current Password</label>
                          <Input type="password" />
                        </div>
                        <div>
                          <label className="text-sm">New Password</label>
                          <Input type="password" />
                        </div>
                        <div>
                          <label className="text-sm">Confirm New Password</label>
                          <Input type="password" />
                        </div>
                        <Button>Change Password</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}

